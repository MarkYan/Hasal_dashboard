import os
import csv
import datetime
from lib.common.logConfig import get_logger
from lib.common.nameConfig import *
from lib.common.sutieConfig import *
from dateutil import tz
from pages.progressPage import ProgressPage
from pages.graphPage import GraphPage
from pages.indexPage import IndexPage
from pages.pendingList import PendingList
from tools.query_data_from_perfherder import QueryData

from_zone = tz.tzutc()
to_zone = tz.tzlocal()


class Dashboard(object):
    def __init__(self, enable_advance):
        # self.queryRange = 604800  # 7 days
        self.queryRange = 1209600  # 14 days
        # self.queryRange = 2419200  # one month
        # self.queryRange = 14515200  # half year

        # load page classes
        self.graph_page = GraphPage(self, enable_advance)
        self.progress_page = ProgressPage(self, enable_advance)
        self.pending_list = PendingList(self, enable_advance)
        self.index_page = IndexPage(self, enable_advance)

        # value_ds is a data structure that save
        # a list of values with keys, suite name,
        # machine type, browser type, and datetime
        # which precision to second.
        # Ex. self.value_ds[_s][_m][_b][_t] = list()
        self.value_ds = dict()

        # count_ds is a data structure that save
        # values count of date with keys, suite name,
        # machine type, browser type, and date.
        # Ex. self.count_ds[_s][_m][_b][_d] = 3
        self.count_ds = dict()
        self.reset_value_and_count()

        self.ref_date = (datetime.date.today() -
                         datetime.timedelta(days=1)).strftime("%Y-%m-%d")

        self.schedule_space = list()
        for x in task_schedule.values():
            self.schedule_space.extend(x)
        self.schedule_space = sorted(self.schedule_space)

        # create dir
        if not os.path.exists(BUILD_DIR):
            os.makedirs(BUILD_DIR)
        if not os.path.exists(os.path.join(BUILD_DIR, JS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, JS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, CSS_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, CSS_DIR))
        if not os.path.exists(os.path.join(BUILD_DIR, IMG_DIR)):
            os.makedirs(os.path.join(BUILD_DIR, IMG_DIR))

        # init logger
        self.logger = get_logger(__file__, enable_advance)

    def reset_value_and_count(self):
        self.ref_date = (datetime.date.today() -
                         datetime.timedelta(days=1)).strftime("%Y-%m-%d")
        self.value_ds.clear()
        self.count_ds.clear()
        for s in task_dict.keys():
            self.value_ds[s] = {}
            self.count_ds[s] = {}
            for m in MACHINE_SET:
                self.value_ds[s][m] = {}
                self.count_ds[s][m] = {}
                for b in BROWSER_SET:
                    self.value_ds[s][m][b] = {}
                    self.count_ds[s][m][b] = {}

    def analyze_csv(self):
        """ read csv and parse data """

        _ref_datetime = datetime.datetime.strptime(self.ref_date, '%Y-%m-%d')

        with open(HASAL_CSV) as f:
            r = csv.DictReader(f)
            for row in r:
                _s = '{} {}'.format(row['suite_name'], row['_'])
                _m = row['machine_platform']
                _b = row['browser_type']
                _d = row['date']
                _t = '{} {}'.format(row['date'], row['time'])

                # find the latest date in query result (default ref_date is previous day)
                _input_datetime = datetime.datetime.strptime(_d, '%Y-%m-%d')
                if _input_datetime > _ref_datetime:
                    self.ref_date = _d

                if _s not in task_dict.keys():
                    continue
                elif _m not in MACHINE_SET or _b not in BROWSER_SET:
                    continue

                _v = row['value']

                # create new key if not exist
                if _t not in self.value_ds[_s][_m][_b].keys():
                    self.value_ds[_s][_m][_b][_t] = []

                if _d not in self.count_ds[_s][_m][_b].keys():
                    self.count_ds[_s][_m][_b][_d] = 0

                # save data
                self.count_ds[_s][_m][_b][_d] += 1
                self.value_ds[_s][_m][_b][_t].append(_v)

    def query_data(self, interval):
        """
        query data and gen a csv file
        """
        DEFAULT_QUERY_OPTION = 'all'

        self.logger.info("Start query data from pf, might takes a while ...")
        query_data_obj = QueryData()
        query_data_obj.query_data(query_interval=interval,
                                  query_keyword=DEFAULT_QUERY_OPTION,
                                  query_btype=DEFAULT_QUERY_OPTION,
                                  query_platform=DEFAULT_QUERY_OPTION,
                                  query_suite_name=DEFAULT_QUERY_OPTION,
                                  query_begin_date=DEFAULT_QUERY_OPTION,
                                  query_end_date=DEFAULT_QUERY_OPTION,
                                  csv_filename=HASAL_CSV)
        self.logger.info("Done query data!")

    def run(self, query_data):
        # reset data structure
        self.reset_value_and_count()

        # read csv and analyze
        if query_data or not os.path.isfile(HASAL_CSV):
            self.query_data(self.queryRange)
        self.analyze_csv()

        # create web-pages
        self.graph_page.create_page()
        self.progress_page.create_page()
        self.pending_list.create_page()
        self.index_page.create_page(self.graph_page.set_page_dict)
