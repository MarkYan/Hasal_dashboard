var gsearch_ail_select_search_suggestion_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gsearch_ail_select_search_suggestion_windows8'
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
			[Date.UTC(2017, 6, 12), 11.110000],
			[Date.UTC(2017, 6, 12), 44.440000],
			[Date.UTC(2017, 6, 12), 66.670000],
			[Date.UTC(2017, 6, 12), 77.780000],
			[Date.UTC(2017, 6, 13), 188.890000],
			[Date.UTC(2017, 6, 13), 211.110000],
			[Date.UTC(2017, 6, 13), 233.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 44.440000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 15), 11.110000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 44.440000],
			[Date.UTC(2017, 6, 15), 44.440000],
			[Date.UTC(2017, 6, 15), 44.440000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 44.440000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 55.560000],
			[Date.UTC(2017, 6, 18), 44.440000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 244.440000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 21), 211.110000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 88.890000],
			[Date.UTC(2017, 6, 22), 233.330000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 22), 55.560000],
			[Date.UTC(2017, 6, 22), 77.780000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 24), 100.000000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 25), 44.440000],
			[Date.UTC(2017, 6, 26), 11.110000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 28), 166.670000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 2), 177.780000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 44.440000],
			[Date.UTC(2017, 7, 7), 188.890000],
			[Date.UTC(2017, 7, 7), 33.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 12), 22.220000],
			[Date.UTC(2017, 6, 12), 22.220000],
			[Date.UTC(2017, 6, 12), 22.220000],
			[Date.UTC(2017, 6, 12), 33.330000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 15), 166.670000],
			[Date.UTC(2017, 6, 15), 166.670000],
			[Date.UTC(2017, 6, 15), 188.890000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 16), 11.110000],
			[Date.UTC(2017, 6, 16), 166.670000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 33.330000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 19), 188.890000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 333.330000],
			[Date.UTC(2017, 6, 19), 77.780000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 22), 11.110000],
			[Date.UTC(2017, 6, 22), 166.670000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 23), 100.000000],
			[Date.UTC(2017, 6, 23), 166.670000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 77.780000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 44.440000],
			[Date.UTC(2017, 6, 25), 11.110000],
			[Date.UTC(2017, 6, 25), 200.000000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 7, 1), 11.110000],
			[Date.UTC(2017, 7, 1), 166.670000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
		]    }]
}