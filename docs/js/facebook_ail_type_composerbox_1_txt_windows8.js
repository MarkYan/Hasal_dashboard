var facebook_ail_type_composerbox_1_txt_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_composerbox_1_txt_windows8'
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
			[Date.UTC(2017, 6, 12), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 55.560000],
			[Date.UTC(2017, 6, 13), 66.670000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 44.440000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 14), 55.560000],
			[Date.UTC(2017, 6, 14), 66.670000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 55.560000],
			[Date.UTC(2017, 6, 15), 55.560000],
			[Date.UTC(2017, 6, 16), 33.330000],
			[Date.UTC(2017, 6, 16), 33.330000],
			[Date.UTC(2017, 6, 16), 55.560000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 44.440000],
			[Date.UTC(2017, 6, 17), 55.560000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 18), 33.330000],
			[Date.UTC(2017, 6, 18), 55.560000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 55.560000],
			[Date.UTC(2017, 6, 19), 66.670000],
			[Date.UTC(2017, 6, 20), 44.440000],
			[Date.UTC(2017, 6, 20), 55.560000],
			[Date.UTC(2017, 6, 20), 77.780000],
			[Date.UTC(2017, 6, 21), 44.440000],
			[Date.UTC(2017, 6, 21), 44.440000],
			[Date.UTC(2017, 6, 21), 55.560000],
			[Date.UTC(2017, 6, 21), 55.560000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 21), 66.670000],
			[Date.UTC(2017, 6, 22), 22.220000],
			[Date.UTC(2017, 6, 22), 55.560000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 44.440000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 23), 55.560000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 44.440000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 24), 55.560000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 25), 44.440000],
			[Date.UTC(2017, 6, 25), 44.440000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 26), 33.330000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 26), 55.560000],
			[Date.UTC(2017, 6, 27), 44.440000],
			[Date.UTC(2017, 6, 27), 55.560000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 44.440000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 66.670000],
			[Date.UTC(2017, 6, 28), 77.780000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 6, 28), 55.560000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 77.780000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 44.440000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 1), 55.560000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 55.560000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 2), 66.670000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 44.440000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 4), 55.560000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 55.560000],
			[Date.UTC(2017, 7, 5), 66.670000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 55.560000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 6), 66.670000],
			[Date.UTC(2017, 7, 7), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 12), 33.330000],
			[Date.UTC(2017, 6, 12), 77.780000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 22.220000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 33.330000],
			[Date.UTC(2017, 6, 13), 44.440000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 22.220000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 14), 33.330000],
			[Date.UTC(2017, 6, 15), 22.220000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 15), 33.330000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 22.220000],
			[Date.UTC(2017, 6, 16), 33.330000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 22.220000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 17), 33.330000],
			[Date.UTC(2017, 6, 18), 22.220000],
			[Date.UTC(2017, 6, 18), 22.220000],
			[Date.UTC(2017, 6, 18), 44.440000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 22.220000],
			[Date.UTC(2017, 6, 19), 44.440000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 19), 33.330000],
			[Date.UTC(2017, 6, 20), 22.220000],
			[Date.UTC(2017, 6, 20), 33.330000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 22.220000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 21), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 22), 33.330000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 22.220000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 33.330000],
			[Date.UTC(2017, 6, 23), 44.440000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 22.220000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 24), 33.330000],
			[Date.UTC(2017, 6, 25), 33.330000],
			[Date.UTC(2017, 6, 25), 44.440000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 22.220000],
			[Date.UTC(2017, 6, 26), 44.440000],
			[Date.UTC(2017, 6, 27), 22.220000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 6, 28), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 22.220000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 1), 33.330000],
			[Date.UTC(2017, 7, 2), 22.220000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 33.330000],
			[Date.UTC(2017, 7, 2), 44.440000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 22.220000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 33.330000],
			[Date.UTC(2017, 7, 3), 55.560000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 22.220000],
			[Date.UTC(2017, 7, 4), 33.330000],
			[Date.UTC(2017, 7, 4), 44.440000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 22.220000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 33.330000],
			[Date.UTC(2017, 7, 5), 44.440000],
			[Date.UTC(2017, 7, 5), 88.890000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 22.220000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 6), 33.330000],
			[Date.UTC(2017, 7, 7), 33.330000],
		]    }]
}