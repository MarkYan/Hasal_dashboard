var gsearch_ail_select_image_cat_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_image_cat_windows8'
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
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 100.000000],
			[Date.UTC(2017, 7, 30), 111.110000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 100.000000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 3), 77.780000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 77.780000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 66.670000],
			[Date.UTC(2017, 8, 5), 77.780000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 77.780000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 77.780000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 7), 88.890000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 9), 88.890000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 77.780000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 10), 88.890000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 77.780000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 77.780000],
			[Date.UTC(2017, 8, 12), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 88.890000],
			[Date.UTC(2017, 7, 31), 111.110000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 222.220000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 7, 31), 88.890000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 111.110000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 211.110000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 2), 100.000000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 244.440000],
			[Date.UTC(2017, 8, 3), 100.000000],
			[Date.UTC(2017, 8, 3), 111.110000],
			[Date.UTC(2017, 8, 3), 122.220000],
			[Date.UTC(2017, 8, 3), 200.000000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 111.110000],
			[Date.UTC(2017, 8, 4), 200.000000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 88.890000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 211.110000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 88.890000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 211.110000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 88.890000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 111.110000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 88.890000],
			[Date.UTC(2017, 8, 12), 200.000000],
		]    }]
}