var youtube_ail_type_in_search_field_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'youtube_ail_type_in_search_field_windows8'
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
			[Date.UTC(2017, 6, 12), 22.220000],
			[Date.UTC(2017, 6, 12), 33.330000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 55.560000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 18), 22.220000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 24), 11.110000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 233.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 26), 11.110000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 233.330000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 277.780000],
			[Date.UTC(2017, 6, 27), 1111.110000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 244.440000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 266.670000],
			[Date.UTC(2017, 7, 1), 300.000000],
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
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 33.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 12), 244.440000],
			[Date.UTC(2017, 6, 13), 11.110000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 14), 11.110000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 222.220000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 11.110000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 18), 11.110000],
			[Date.UTC(2017, 6, 18), 11.110000],
			[Date.UTC(2017, 6, 18), 22.220000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 11.110000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 21), 11.110000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 23), 11.110000],
			[Date.UTC(2017, 6, 23), 11.110000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 24), 11.110000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 25), 11.110000],
			[Date.UTC(2017, 6, 25), 22.220000],
			[Date.UTC(2017, 6, 25), 244.440000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 11.110000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 6, 28), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 11.110000],
			[Date.UTC(2017, 7, 1), 11.110000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 233.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 11.110000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 3), 11.110000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 11.110000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 4), 11.110000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 244.440000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 11.110000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 255.560000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 11.110000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 288.890000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 7), 11.110000],
			[Date.UTC(2017, 7, 7), 22.220000],
			[Date.UTC(2017, 7, 7), 244.440000],
		]    }]
}