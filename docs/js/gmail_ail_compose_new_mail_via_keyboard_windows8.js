var gmail_ail_compose_new_mail_via_keyboard_windows8 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'gmail_ail_compose_new_mail_via_keyboard_windows8'
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
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 200.000000],
			[Date.UTC(2017, 7, 30), 211.110000],
			[Date.UTC(2017, 7, 30), 222.220000],
			[Date.UTC(2017, 7, 30), 233.330000],
			[Date.UTC(2017, 7, 30), 244.440000],
			[Date.UTC(2017, 7, 30), 244.440000],
			[Date.UTC(2017, 7, 30), 333.330000],
			[Date.UTC(2017, 7, 30), 333.330000],
			[Date.UTC(2017, 7, 31), 200.000000],
			[Date.UTC(2017, 7, 31), 211.110000],
			[Date.UTC(2017, 7, 31), 222.220000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 233.330000],
			[Date.UTC(2017, 7, 31), 244.440000],
			[Date.UTC(2017, 7, 31), 333.330000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 200.000000],
			[Date.UTC(2017, 8, 1), 222.220000],
			[Date.UTC(2017, 8, 1), 233.330000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 166.670000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 211.110000],
			[Date.UTC(2017, 8, 2), 222.220000],
			[Date.UTC(2017, 8, 2), 222.220000],
			[Date.UTC(2017, 8, 2), 222.220000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 211.110000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 3), 222.220000],
			[Date.UTC(2017, 8, 3), 244.440000],
			[Date.UTC(2017, 8, 4), 177.780000],
			[Date.UTC(2017, 8, 4), 211.110000],
			[Date.UTC(2017, 8, 4), 222.220000],
			[Date.UTC(2017, 8, 4), 233.330000],
			[Date.UTC(2017, 8, 4), 255.560000],
			[Date.UTC(2017, 8, 4), 266.670000],
			[Date.UTC(2017, 8, 4), 288.890000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 188.890000],
			[Date.UTC(2017, 8, 5), 200.000000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 211.110000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 5), 222.220000],
			[Date.UTC(2017, 8, 6), 177.780000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 188.890000],
			[Date.UTC(2017, 8, 6), 200.000000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 6), 233.330000],
			[Date.UTC(2017, 8, 7), 188.890000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 222.220000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 233.330000],
			[Date.UTC(2017, 8, 7), 244.440000],
			[Date.UTC(2017, 8, 8), 200.000000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 211.110000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 222.220000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 8), 233.330000],
			[Date.UTC(2017, 8, 9), 200.000000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 211.110000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 222.220000],
			[Date.UTC(2017, 8, 9), 255.560000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 211.110000],
			[Date.UTC(2017, 8, 10), 222.220000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 233.330000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 10), 255.560000],
			[Date.UTC(2017, 8, 11), 211.110000],
			[Date.UTC(2017, 8, 11), 222.220000],
			[Date.UTC(2017, 8, 11), 222.220000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 233.330000],
			[Date.UTC(2017, 8, 11), 244.440000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 30), 111.110000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 122.220000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 133.330000],
			[Date.UTC(2017, 7, 30), 144.440000],
			[Date.UTC(2017, 7, 30), 144.440000],
			[Date.UTC(2017, 7, 30), 155.560000],
			[Date.UTC(2017, 7, 30), 155.560000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 30), 177.780000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 122.220000],
			[Date.UTC(2017, 7, 31), 133.330000],
			[Date.UTC(2017, 7, 31), 133.330000],
			[Date.UTC(2017, 7, 31), 133.330000],
			[Date.UTC(2017, 7, 31), 133.330000],
			[Date.UTC(2017, 7, 31), 155.560000],
			[Date.UTC(2017, 7, 31), 166.670000],
			[Date.UTC(2017, 7, 31), 166.670000],
			[Date.UTC(2017, 7, 31), 166.670000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 122.220000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 133.330000],
			[Date.UTC(2017, 8, 1), 144.440000],
			[Date.UTC(2017, 8, 1), 155.560000],
			[Date.UTC(2017, 8, 2), 111.110000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 122.220000],
			[Date.UTC(2017, 8, 2), 133.330000],
			[Date.UTC(2017, 8, 2), 144.440000],
			[Date.UTC(2017, 8, 2), 155.560000],
			[Date.UTC(2017, 8, 2), 155.560000],
			[Date.UTC(2017, 8, 3), 122.220000],
			[Date.UTC(2017, 8, 3), 133.330000],
			[Date.UTC(2017, 8, 3), 133.330000],
			[Date.UTC(2017, 8, 3), 133.330000],
			[Date.UTC(2017, 8, 3), 144.440000],
			[Date.UTC(2017, 8, 3), 144.440000],
			[Date.UTC(2017, 8, 3), 155.560000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 133.330000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 144.440000],
			[Date.UTC(2017, 8, 4), 155.560000],
			[Date.UTC(2017, 8, 4), 155.560000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 111.110000],
			[Date.UTC(2017, 8, 5), 122.220000],
			[Date.UTC(2017, 8, 5), 133.330000],
			[Date.UTC(2017, 8, 5), 144.440000],
			[Date.UTC(2017, 8, 5), 155.560000],
			[Date.UTC(2017, 8, 5), 166.670000],
			[Date.UTC(2017, 8, 6), 111.110000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 122.220000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 133.330000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 144.440000],
			[Date.UTC(2017, 8, 6), 155.560000],
			[Date.UTC(2017, 8, 7), 122.220000],
			[Date.UTC(2017, 8, 7), 133.330000],
			[Date.UTC(2017, 8, 7), 144.440000],
			[Date.UTC(2017, 8, 7), 155.560000],
			[Date.UTC(2017, 8, 7), 177.780000],
			[Date.UTC(2017, 8, 7), 177.780000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 122.220000],
			[Date.UTC(2017, 8, 8), 133.330000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 144.440000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 8), 155.560000],
			[Date.UTC(2017, 8, 9), 100.000000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 111.110000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 133.330000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 144.440000],
			[Date.UTC(2017, 8, 9), 177.780000],
			[Date.UTC(2017, 8, 10), 122.220000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 144.440000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 10), 155.560000],
			[Date.UTC(2017, 8, 10), 166.670000],
			[Date.UTC(2017, 8, 11), 122.220000],
			[Date.UTC(2017, 8, 11), 122.220000],
			[Date.UTC(2017, 8, 11), 133.330000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 144.440000],
			[Date.UTC(2017, 8, 11), 155.560000],
			[Date.UTC(2017, 8, 11), 177.780000],
		]    }]
}