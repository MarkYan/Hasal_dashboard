"""

Usage:
  dashboard.py [--query-data] [--deploy]
  dashboard.py (-h | --help)

Options:
  -h --help                 Show this screen.
  --query_data              Query data from pf
  --deploy                  Automatically deploy to Github every half an hour
"""

import os
import csv
import json
import datetime, time
import subprocess, sys
from docopt import docopt
from shutil import copyfile

SET_HTML_TEMPLATE = './template/set_template.html'
SET_DATA_JS_TEMPLATE = './template/case_data_template.js'
GAUGE_JS_TEMPLATE = './template/overall_progress_template.js'
THEME_TEMPLATE = './template/theme.js'
SET_CONFIG = './set_config.json'
BUILD_DIR = './docs'
JS_DIR = os.path.join(BUILD_DIR,'js')
BROWSER_SET = ['firefox', 'chrome']
MACHINE_SET = ['windows8-64', 'windows10-64']
DEPLOY_TIME_INTERVAL = 30 # mins

class Dashboard(object):
    def __init__(self, **kwargs):
        self.hasal_ds = dict()
        self.count_ds = dict()
        self.set_page_dict = dict()
        self.suites = list()
        self.browsers = list()
        self.machines = list()
        self.ref_date = ''

        with open(SET_CONFIG) as data_file:
            self.set_contain = json.load(data_file)

        if not os.path.exists(BUILD_DIR):
            os.makedirs(BUILD_DIR)
        if not os.path.exists(JS_DIR):
            os.makedirs(JS_DIR)

    def setup_ds(self):
        for m in MACHINE_SET:
            self.set_page_dict[m] = {}

        with open('hasal_data.csv') as f:
            r = csv.DictReader(f)
            for row in r:
                _s = '{} {}'.format(row['suite_name'], row['_'])
                _m = row['machine_platform']
                _b = row['browser_type']
                _t = '{} {}'.format(row['date'],row['time'])
                _v = row['value']

                if row['suite_name'] == 'suite_name':
                    continue

                if _s not in self.hasal_ds.keys():
                    self.hasal_ds[_s] = {}
                    self.count_ds[_s] = {}
                if _m not in self.hasal_ds[_s].keys():
                    self.hasal_ds[_s][_m] = {}
                    self.count_ds[_s][_m] = {}
                if _b not in self.hasal_ds[_s][_m].keys():
                    self.hasal_ds[_s][_m][_b] = {}
                    self.count_ds[_s][_m][_b] = {}

                if _t not in self.hasal_ds[_s][_m][_b].keys():
                    self.hasal_ds[_s][_m][_b][_t] = []
                    self.count_ds[_s][_m][_b][_t] = 1
                else:
                    self.count_ds[_s][_m][_b][_t] += 1

                self.hasal_ds[_s][_m][_b][_t].append(_v)

    def create_highchart_theme(self):
        copyfile(THEME_TEMPLATE, os.path.join(JS_DIR, 'theme.js'))

    def write_data_for_case(self, outfile_js, case_name, machine, browser):
        outfile_js.write('\t\tname: \'{}\',\n'.format(browser))
        outfile_js.write('\t\tdata: [\n')
        for time in sorted(self.hasal_ds[case_name][machine][browser].keys()):
            for value in sorted(self.hasal_ds[case_name][machine][browser][time]):
                _t = datetime.datetime.strptime(time, "%Y-%m-%d %H-%M-%S-000000") + datetime.timedelta(hours=8)
                _y = _t.year
                _m = _t.month
                _d = _t.day
                outfile_js.write('\t\t\t[Date.UTC({}, {}, {}), {}],\n'.format(_y, _m, _d, value))
        outfile_js.write('\t\t]')

    def create_case_data_js(self, machine, set_name):
        for counter, case_name in enumerate(self.set_contain[set_name]):
            create_js_path = os.path.join(JS_DIR, '{}_{}.js'.format(case_name[:-7], machine[:-3]))
            with open(create_js_path,'w') as outfile_js, open(SET_DATA_JS_TEMPLATE, 'r') as infile_js:
                for row_js in infile_js:
                    if '{{CHART_TITLE_SHOWN}}' in row_js:
                        create_title = '{}_{}'.format(case_name[:-7], machine[:-3])
                        outfile_js.write(row_js.replace('{{CHART_TITLE_SHOWN}}', create_title))
                    elif 'CASE_VAR_NAME' in row_js:
                        create_case_name = '{}_{}'.format(case_name[:-7],machine[:-3])
                        outfile_js.write(row_js.replace('CASE_VAR_NAME', create_case_name))
                    elif 'CASE_FIREFOX_DATA' in row_js:
                        self.write_data_for_case(outfile_js,case_name,machine,'firefox')
                    elif 'CASE_CHROME_DATA' in row_js:
                        self.write_data_for_case(outfile_js,case_name,machine,'chrome')
                    else:
                        outfile_js.write(row_js)

    def get_color(self, num):
        color = {'red':'#bd1550', 'green':'#75D701', 'yellow':'#E8A317'}
        if num >= 6:
            ret = color['green']
        elif num >= 1:
            ret = color['yellow']
        else:
            ret = color['red']
        return ret

    def get_each_suites_count(self, machine, suite, browser):
        if self.ref_date not in self.count_ds[suite][machine][browser].keys():
            ret = 0
        else:
            ret =  self.count_ds[suite][machine][browser][self.ref_date]
        return ret

    def render_table(self, machine, set_name, outfile):
        for case in self.set_contain[set_name]:
            _cm = '{}_{}'.format(case,machine[:-3])
            _f = self.get_each_suites_count(machine,case,'firefox')
            _c = self.get_each_suites_count(machine,case,'chrome')
            outfile.write('\t\t\t\t\t<tr>\n')
            outfile.write('\t\t\t\t\t\t<td>{}</td>\n'.format(_cm))
            outfile.write('\t\t\t\t\t\t<td style="color: {}">{}/6</td>\n'.format(self.get_color(_f),_f))
            outfile.write('\t\t\t\t\t\t<td style="color: {}">{}/6</td>\n'.format(self.get_color(_c),_c))
            outfile.write('\t\t\t\t\t</tr>\n')

    def create_set_html(self, machine, set_name):
        set_html_file = '{}_{}_set.html'.format(set_name, machine)
        set_html_dir = os.path.join(BUILD_DIR, set_html_file)
        self.set_page_dict[machine][set_name] = set_html_file
        with open(set_html_dir, 'w') as outfile, open(SET_HTML_TEMPLATE, 'r') as infile:
            for row in infile:
                if '{{TITLE_NAME}}' in row:
                    outfile.write(row.replace('{{TITLE_NAME}}', 'Hasal_{}_{}'.format(set_name, machine)))
                elif '<!--TIME CHART JS CODE ADD HERE-->' in row:
                    for counter, case_name in enumerate(self.set_contain[set_name]):
                        outfile.write(
                            '\t<script language="JavaScript" src="./js/{}_{}.js"></script>\n'.format(case_name[:-7],machine[:-3]))
                        outfile.write('\t<script language="JavaScript">\n')
                        outfile.write(
                            "\t\t$(function () {{Highcharts.chart('container{}', {}_{});}});\n".format(counter + 1,case_name[:-7],machine[:-3]))
                        outfile.write('\t</script>\n')
                elif '<!--GAUGE JS CODE ADD HERE-->' in row:
                    for m in MACHINE_SET:
                        outfile.write('\t<script language="JavaScript" src="./js/{}_gauge.js"></script>\n'.format(m[:-3]))
                        outfile.write('\t<script language="JavaScript">$(function() {{$(\'#container-{}\').highcharts({}_gauge_data);}});</script>\n'.format(m[:-3],m[:-3]))
                elif '{{TIME}}' in row:
                    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                    time = self.ref_date
                    latest_date = datetime.datetime.strptime(time, "%Y-%m-%d %H-%M-%S-000000").strftime("%Y-%m-%d %H:%M:%S")
                    outfile.write(row.replace('{{TIME}}','Latest_data: {}  Refresh: {}'.format(latest_date,now)))
                elif '<!--SUITE PROGRESS GOES HERE-->' in row:
                    self.render_table(machine, set_name, outfile)
                else:
                    outfile.write(row)

    def get_ref_date(self):
        ref_date = datetime.datetime(2015, 1, 13, 12, 0, 0)
        for _s in self.count_ds.keys():
            for _m in MACHINE_SET:
                for _b in self.count_ds[_s][_m].keys():
                    latest_date = sorted(self.count_ds[_s][_m][_b].keys(), reverse=True)[0]
                    latest_date = datetime.datetime.strptime(latest_date, "%Y-%m-%d %H-%M-%S-000000")
                    if (latest_date - ref_date).total_seconds() > 0:
                        ref_date = latest_date

        self.ref_date = ref_date.strftime("%Y-%m-%d %H-%M-%S-000000")

    def get_overall_working_prgress(self, machine):
        total_jobs = 0
        finished_jobs = 0
        for _s in self.count_ds.keys():
            for _b in self.count_ds[_s][machine].keys():
                total_jobs += 6

                # check time
                # latest_date = sorted(self.count_ds[_s][machine][_b].keys(),reverse=True)[0]
                # finished_jobs += self.count_ds[_s][machine][_b][latest_date]
                r_date = self.ref_date
                if r_date not in self.count_ds[_s][machine][_b].keys():
                    # TODO:must alert
                    pass
                else:
                    finished_jobs += self.count_ds[_s][machine][_b][r_date]

        return finished_jobs * 100 / total_jobs

    def create_gauge_js(self,machine):
        percentage = self.get_overall_working_prgress(machine)
        create_js = os.path.join(JS_DIR, '{}_gauge.js'.format(machine[:-3]))
        with open(create_js, 'w') as outfile, open(GAUGE_JS_TEMPLATE, 'r') as infile:
            for row in infile:
                if 'GAUGE_MACHINE_VAR' in row:
                    outfile.write(row.replace('GAUGE_MACHINE_VAR','{}_gauge_data'.format(machine[:-3])))
                elif '{{MACHINE}}' in row:
                    outfile.write(row.replace('{{MACHINE}}', machine[:-3]))
                elif '{{PERCENTAGE}}' in row:
                    outfile.write(row.replace('\'{{PERCENTAGE}}\'','[{}]'.format(percentage)))
                else:
                    outfile.write(row)

    def create_pages(self):
        self.create_highchart_theme()

        # create web_page with machine
        for m in MACHINE_SET:
            for set_name in self.set_contain.keys():
                self.create_set_html(m, set_name)
                self.create_case_data_js(m, set_name)
                self.create_gauge_js(m)

    def create_index(self):
        index_out = os.path.join(BUILD_DIR,'index.html')
        index_template = './template/index.html'
        with open(index_out, 'w') as outfile, open(index_template, 'r') as infile:
            for row in infile:
                if '<!--windows8-64 here-->' in row:
                    outfile.write('\t<h1>windows8</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows8-64'
                    for set in sorted(self.set_page_dict[m].keys()):
                        outfile.write('\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set],set,m))
                    outfile.write('\t</table>\n')
                elif '<!--windows10-64 here-->' in row:
                    outfile.write('\t<h1>windows10</h1>\n')
                    outfile.write('\t<table>\n')
                    m = 'windows10-64'
                    for set in sorted(self.set_page_dict[m].keys()):
                        outfile.write('\t\t<tr><td><a href="{}">{} on {}</a></td></tr>\n'.format(self.set_page_dict[m][set],set,m))
                    outfile.write('\t</table>\n')
                else:
                    outfile.write(row)

    def run(self):
        self.setup_ds()
        self.get_ref_date()
        self.create_pages()
        self.create_index()

def create_db():
    cmd = 'python query_data_from_perfherder.py > tmp.txt'
    retcode = subprocess.call(cmd, shell=True)
    if retcode != 0: sys.exit(retcode)

    with open('tmp.txt') as fin, open('hasal_data.csv', 'w') as fout:
        o = csv.writer(fout)
        o.writerow(['suite_name','_','browser_type','machine_platform','date','time','value'])
        for line in fin:
            o.writerow(line.split())

    os.remove('tmp.txt')

def deploy_mode():
    my_dashboard = Dashboard()
    while(True):
        print "Start deploy process ..."

        print "Start query data ..."
        create_db()
        print "Done query data!"

        print "Create website ..."
        my_dashboard.run()
        print "Done create website!"

        # push to github
        cmd = 'git add ./docs/*'
        retcode = subprocess.call(cmd, shell=True)
        if retcode != 0: sys.exit(retcode)

        cmd = 'git commit -m \'auto deploy on {}\''.format(datetime.datetime.now().strftime('%H:%M:%S'))
        retcode = subprocess.call(cmd, shell=True)
        if retcode != 0: sys.exit(retcode)

        cmd = 'git push origin master'
        retcode = subprocess.call(cmd, shell=True)
        if retcode != 0: sys.exit(retcode)
        print "Git push success"

        print "Time to sleep ... Bye"
        time.sleep(60*DEPLOY_TIME_INTERVAL)

def main():
    arguments = docopt(__doc__)
    if arguments['--deploy']:
        deploy_mode()
    else:
        if arguments['--query-data']:
            create_db()
        my_dashboard = Dashboard()
        my_dashboard.run()

if __name__ == '__main__':
    main()
