var gsearch_ail_type_searchbox_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_type_searchbox_windows10'
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Asynchronize Input latency (ms)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} ms'
    },

    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },

    // Define the data points. All series have a dummy year
    // of 1970/7/1 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
		name: 'firefox',
		data: [
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 11.110000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 18), 22.220000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 11.110000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 22.220000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 19), 33.330000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 22), 11.110000],
			[Date.UTC(2017, 7, 22), 11.110000],
			[Date.UTC(2017, 7, 22), 11.110000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 23), 11.110000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 26), 11.110000],
			[Date.UTC(2017, 7, 26), 11.110000],
			[Date.UTC(2017, 7, 26), 11.110000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 27), 11.110000],
			[Date.UTC(2017, 7, 27), 22.220000],
			[Date.UTC(2017, 7, 27), 22.220000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 29), 11.110000],
			[Date.UTC(2017, 7, 29), 11.110000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 33.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 5.560000],
			[Date.UTC(2017, 7, 18), 66.670000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 19), 5.560000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 23), 11.110000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 27), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 28), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
		]    }]
}