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
			[Date.UTC(2017, 6, 12), 166.670000],
			[Date.UTC(2017, 6, 12), 200.000000],
			[Date.UTC(2017, 6, 13), 188.890000],
			[Date.UTC(2017, 6, 13), 200.000000],
			[Date.UTC(2017, 6, 13), 200.000000],
			[Date.UTC(2017, 6, 13), 300.000000],
			[Date.UTC(2017, 6, 13), 300.000000],
			[Date.UTC(2017, 6, 14), 166.670000],
			[Date.UTC(2017, 6, 14), 188.890000],
			[Date.UTC(2017, 6, 14), 200.000000],
			[Date.UTC(2017, 6, 14), 222.220000],
			[Date.UTC(2017, 6, 14), 233.330000],
			[Date.UTC(2017, 6, 14), 300.000000],
			[Date.UTC(2017, 6, 15), 177.780000],
			[Date.UTC(2017, 6, 15), 188.890000],
			[Date.UTC(2017, 6, 15), 200.000000],
			[Date.UTC(2017, 6, 15), 200.000000],
			[Date.UTC(2017, 6, 15), 277.780000],
			[Date.UTC(2017, 6, 15), 311.110000],
			[Date.UTC(2017, 6, 16), 177.780000],
			[Date.UTC(2017, 6, 16), 188.890000],
			[Date.UTC(2017, 6, 16), 200.000000],
			[Date.UTC(2017, 6, 16), 200.000000],
			[Date.UTC(2017, 6, 16), 255.560000],
			[Date.UTC(2017, 6, 17), 166.670000],
			[Date.UTC(2017, 6, 17), 177.780000],
			[Date.UTC(2017, 6, 17), 188.890000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 266.670000],
			[Date.UTC(2017, 6, 17), 300.000000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 211.110000],
			[Date.UTC(2017, 6, 19), 266.670000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 166.670000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 277.780000],
			[Date.UTC(2017, 6, 20), 188.890000],
			[Date.UTC(2017, 6, 20), 200.000000],
			[Date.UTC(2017, 6, 20), 200.000000],
			[Date.UTC(2017, 6, 20), 211.110000],
			[Date.UTC(2017, 6, 20), 300.000000],
			[Date.UTC(2017, 6, 20), 333.330000],
			[Date.UTC(2017, 6, 25), 188.890000],
			[Date.UTC(2017, 6, 26), 400.000000],
			[Date.UTC(2017, 6, 26), 177.780000],
			[Date.UTC(2017, 6, 26), 244.440000],
			[Date.UTC(2017, 6, 26), 266.670000],
			[Date.UTC(2017, 6, 26), 344.440000],
			[Date.UTC(2017, 6, 26), 444.440000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 211.110000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 255.560000],
			[Date.UTC(2017, 6, 28), 333.330000],
			[Date.UTC(2017, 6, 28), 355.560000],
			[Date.UTC(2017, 6, 28), 177.780000],
			[Date.UTC(2017, 6, 28), 200.000000],
			[Date.UTC(2017, 6, 28), 222.220000],
			[Date.UTC(2017, 6, 28), 233.330000],
			[Date.UTC(2017, 6, 28), 366.670000],
			[Date.UTC(2017, 7, 1), 255.560000],
			[Date.UTC(2017, 7, 1), 344.440000],
			[Date.UTC(2017, 7, 1), 555.560000],
			[Date.UTC(2017, 7, 1), 177.780000],
			[Date.UTC(2017, 7, 1), 188.890000],
			[Date.UTC(2017, 7, 1), 200.000000],
			[Date.UTC(2017, 7, 1), 222.220000],
			[Date.UTC(2017, 7, 1), 255.560000],
			[Date.UTC(2017, 7, 1), 322.220000],
			[Date.UTC(2017, 7, 1), 333.330000],
			[Date.UTC(2017, 7, 1), 333.330000],
			[Date.UTC(2017, 7, 2), 177.780000],
			[Date.UTC(2017, 7, 2), 200.000000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 233.330000],
			[Date.UTC(2017, 7, 2), 288.890000],
			[Date.UTC(2017, 7, 2), 322.220000],
			[Date.UTC(2017, 7, 2), 366.670000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 200.000000],
			[Date.UTC(2017, 7, 3), 211.110000],
			[Date.UTC(2017, 7, 3), 233.330000],
			[Date.UTC(2017, 7, 3), 266.670000],
			[Date.UTC(2017, 7, 3), 322.220000],
			[Date.UTC(2017, 7, 3), 333.330000],
			[Date.UTC(2017, 7, 3), 388.890000],
			[Date.UTC(2017, 7, 4), 166.670000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 4), 266.670000],
			[Date.UTC(2017, 7, 4), 355.560000],
			[Date.UTC(2017, 7, 5), 222.220000],
			[Date.UTC(2017, 7, 5), 277.780000],
			[Date.UTC(2017, 7, 5), 366.670000],
			[Date.UTC(2017, 7, 5), 200.000000],
			[Date.UTC(2017, 7, 5), 200.000000],
			[Date.UTC(2017, 7, 5), 233.330000],
			[Date.UTC(2017, 7, 5), 400.000000],
			[Date.UTC(2017, 7, 6), 222.220000],
			[Date.UTC(2017, 7, 6), 266.670000],
			[Date.UTC(2017, 7, 6), 344.440000],
			[Date.UTC(2017, 7, 6), 355.560000],
			[Date.UTC(2017, 7, 6), 355.560000],
			[Date.UTC(2017, 7, 6), 377.780000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 6, 12), 100.000000],
			[Date.UTC(2017, 6, 12), 122.220000],
			[Date.UTC(2017, 6, 12), 222.220000],
			[Date.UTC(2017, 6, 13), 111.110000],
			[Date.UTC(2017, 6, 13), 122.220000],
			[Date.UTC(2017, 6, 13), 200.000000],
			[Date.UTC(2017, 6, 13), 222.220000],
			[Date.UTC(2017, 6, 13), 88.890000],
			[Date.UTC(2017, 6, 14), 100.000000],
			[Date.UTC(2017, 6, 14), 100.000000],
			[Date.UTC(2017, 6, 14), 100.000000],
			[Date.UTC(2017, 6, 14), 111.110000],
			[Date.UTC(2017, 6, 14), 200.000000],
			[Date.UTC(2017, 6, 15), 100.000000],
			[Date.UTC(2017, 6, 15), 100.000000],
			[Date.UTC(2017, 6, 15), 111.110000],
			[Date.UTC(2017, 6, 15), 133.330000],
			[Date.UTC(2017, 6, 15), 211.110000],
			[Date.UTC(2017, 6, 15), 233.330000],
			[Date.UTC(2017, 6, 16), 100.000000],
			[Date.UTC(2017, 6, 16), 111.110000],
			[Date.UTC(2017, 6, 16), 133.330000],
			[Date.UTC(2017, 6, 16), 200.000000],
			[Date.UTC(2017, 6, 16), 88.890000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 100.000000],
			[Date.UTC(2017, 6, 17), 111.110000],
			[Date.UTC(2017, 6, 17), 133.330000],
			[Date.UTC(2017, 6, 17), 200.000000],
			[Date.UTC(2017, 6, 17), 233.330000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 233.330000],
			[Date.UTC(2017, 6, 19), 100.000000],
			[Date.UTC(2017, 6, 19), 111.110000],
			[Date.UTC(2017, 6, 19), 133.330000],
			[Date.UTC(2017, 6, 19), 200.000000],
			[Date.UTC(2017, 6, 19), 277.780000],
			[Date.UTC(2017, 6, 20), 122.220000],
			[Date.UTC(2017, 6, 20), 133.330000],
			[Date.UTC(2017, 6, 20), 200.000000],
			[Date.UTC(2017, 6, 25), 122.220000],
			[Date.UTC(2017, 6, 26), 155.560000],
			[Date.UTC(2017, 6, 26), 100.000000],
			[Date.UTC(2017, 6, 26), 100.000000],
			[Date.UTC(2017, 6, 26), 122.220000],
			[Date.UTC(2017, 6, 26), 166.670000],
			[Date.UTC(2017, 6, 26), 200.000000],
			[Date.UTC(2017, 6, 28), 100.000000],
			[Date.UTC(2017, 6, 28), 122.220000],
			[Date.UTC(2017, 6, 28), 111.110000],
			[Date.UTC(2017, 6, 28), 177.780000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 155.560000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 100.000000],
			[Date.UTC(2017, 7, 1), 111.110000],
			[Date.UTC(2017, 7, 1), 122.220000],
			[Date.UTC(2017, 7, 1), 144.440000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 100.000000],
			[Date.UTC(2017, 7, 2), 111.110000],
			[Date.UTC(2017, 7, 2), 122.220000],
			[Date.UTC(2017, 7, 2), 155.560000],
			[Date.UTC(2017, 7, 2), 211.110000],
			[Date.UTC(2017, 7, 3), 122.220000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 100.000000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 111.110000],
			[Date.UTC(2017, 7, 3), 155.560000],
			[Date.UTC(2017, 7, 3), 166.670000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 100.000000],
			[Date.UTC(2017, 7, 4), 122.220000],
			[Date.UTC(2017, 7, 4), 200.000000],
			[Date.UTC(2017, 7, 5), 100.000000],
			[Date.UTC(2017, 7, 5), 111.110000],
			[Date.UTC(2017, 7, 5), 155.560000],
			[Date.UTC(2017, 7, 5), 100.000000],
			[Date.UTC(2017, 7, 5), 122.220000],
			[Date.UTC(2017, 7, 5), 122.220000],
			[Date.UTC(2017, 7, 5), 155.560000],
			[Date.UTC(2017, 7, 6), 100.000000],
			[Date.UTC(2017, 7, 6), 111.110000],
			[Date.UTC(2017, 7, 6), 122.220000],
			[Date.UTC(2017, 7, 6), 133.330000],
			[Date.UTC(2017, 7, 6), 166.670000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 6), 200.000000],
			[Date.UTC(2017, 7, 7), 133.330000],
		]    }]
}