var gmail_ail_compose_new_mail_via_keyboard_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows10'
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
			[Date.UTC(2017, 8, 5), 177.780000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 166.670000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 6), 222.220000],
			[Date.UTC(2017, 8, 7), 166.670000],
			[Date.UTC(2017, 8, 7), 200.000000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 8), 166.670000],
			[Date.UTC(2017, 8, 8), 177.780000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 188.890000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 188.890000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 666.670000],
			[Date.UTC(2017, 8, 10), 177.780000],
			[Date.UTC(2017, 8, 10), 188.890000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 10), 200.000000],
			[Date.UTC(2017, 8, 11), 166.670000],
			[Date.UTC(2017, 8, 11), 188.890000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 200.000000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 11), 477.780000],
			[Date.UTC(2017, 8, 12), 177.780000],
			[Date.UTC(2017, 8, 12), 188.890000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 211.110000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 12), 222.220000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 188.890000],
			[Date.UTC(2017, 8, 13), 200.000000],
			[Date.UTC(2017, 8, 13), 222.220000],
			[Date.UTC(2017, 8, 13), 244.440000],
			[Date.UTC(2017, 8, 13), 344.440000],
			[Date.UTC(2017, 8, 14), 166.670000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 200.000000],
			[Date.UTC(2017, 8, 14), 222.220000],
			[Date.UTC(2017, 8, 14), 233.330000],
			[Date.UTC(2017, 8, 14), 522.220000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 200.000000],
			[Date.UTC(2017, 8, 15), 233.330000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 166.670000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 188.890000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 211.110000],
			[Date.UTC(2017, 8, 18), 300.000000],
			[Date.UTC(2017, 8, 18), 433.330000],
			[Date.UTC(2017, 8, 18), 633.330000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 100.000000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 100.000000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 100.000000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 111.110000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 8), 100.000000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 111.110000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 77.780000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 122.220000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 100.000000],
			[Date.UTC(2017, 8, 10), 111.110000],
			[Date.UTC(2017, 8, 10), 111.110000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 100.000000],
			[Date.UTC(2017, 8, 11), 111.110000],
			[Date.UTC(2017, 8, 11), 111.110000],
			[Date.UTC(2017, 8, 11), 111.110000],
			[Date.UTC(2017, 8, 11), 122.220000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 100.000000],
			[Date.UTC(2017, 8, 12), 111.110000],
			[Date.UTC(2017, 8, 12), 111.110000],
			[Date.UTC(2017, 8, 12), 111.110000],
			[Date.UTC(2017, 8, 12), 122.220000],
			[Date.UTC(2017, 8, 12), 133.330000],
			[Date.UTC(2017, 8, 13), 111.110000],
			[Date.UTC(2017, 8, 13), 111.110000],
			[Date.UTC(2017, 8, 13), 111.110000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 122.220000],
			[Date.UTC(2017, 8, 13), 133.330000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 100.000000],
			[Date.UTC(2017, 8, 14), 111.110000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 14), 122.220000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 111.110000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 122.220000],
			[Date.UTC(2017, 8, 18), 133.330000],
			[Date.UTC(2017, 8, 18), 177.780000],
			[Date.UTC(2017, 8, 18), 200.000000],
			[Date.UTC(2017, 8, 18), 200.000000],
		]    }]
}