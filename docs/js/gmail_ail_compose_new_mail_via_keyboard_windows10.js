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
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 177.780000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 211.110000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 17), 188.890000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 266.670000],
			[Date.UTC(2017, 7, 17), 333.330000],
			[Date.UTC(2017, 7, 17), 388.890000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 266.670000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 277.780000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 288.890000],
			[Date.UTC(2017, 7, 18), 300.000000],
			[Date.UTC(2017, 7, 18), 311.110000],
			[Date.UTC(2017, 7, 18), 322.220000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 333.330000],
			[Date.UTC(2017, 7, 18), 344.440000],
			[Date.UTC(2017, 7, 18), 344.440000],
			[Date.UTC(2017, 7, 18), 422.220000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 277.780000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 288.890000],
			[Date.UTC(2017, 7, 19), 300.000000],
			[Date.UTC(2017, 7, 19), 322.220000],
			[Date.UTC(2017, 7, 19), 455.560000],
			[Date.UTC(2017, 7, 19), 733.330000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 20), 266.670000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 277.780000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 20), 300.000000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 177.780000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 266.670000],
			[Date.UTC(2017, 7, 22), 177.780000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 311.110000],
			[Date.UTC(2017, 7, 22), 322.220000],
			[Date.UTC(2017, 7, 22), 333.330000],
			[Date.UTC(2017, 7, 22), 333.330000],
			[Date.UTC(2017, 7, 23), 233.330000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 266.670000],
			[Date.UTC(2017, 7, 23), 277.780000],
			[Date.UTC(2017, 7, 23), 300.000000],
			[Date.UTC(2017, 7, 23), 311.110000],
			[Date.UTC(2017, 7, 24), 166.670000],
			[Date.UTC(2017, 7, 24), 177.780000],
			[Date.UTC(2017, 7, 24), 200.000000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 300.000000],
			[Date.UTC(2017, 7, 24), 322.220000],
			[Date.UTC(2017, 7, 24), 333.330000],
			[Date.UTC(2017, 7, 24), 333.330000],
			[Date.UTC(2017, 7, 25), 188.890000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 25), 266.670000],
			[Date.UTC(2017, 7, 25), 277.780000],
			[Date.UTC(2017, 7, 25), 322.220000],
			[Date.UTC(2017, 7, 25), 355.560000],
			[Date.UTC(2017, 7, 26), 266.670000],
			[Date.UTC(2017, 7, 26), 300.000000],
			[Date.UTC(2017, 7, 26), 300.000000],
			[Date.UTC(2017, 7, 26), 300.000000],
			[Date.UTC(2017, 7, 26), 322.220000],
			[Date.UTC(2017, 7, 26), 333.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 244.440000],
			[Date.UTC(2017, 7, 27), 300.000000],
			[Date.UTC(2017, 7, 27), 355.560000],
			[Date.UTC(2017, 7, 27), 388.890000],
			[Date.UTC(2017, 7, 27), 733.330000],
			[Date.UTC(2017, 7, 28), 188.890000],
			[Date.UTC(2017, 7, 28), 188.890000],
			[Date.UTC(2017, 7, 28), 200.000000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
			[Date.UTC(2017, 7, 29), 188.890000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 200.000000],
			[Date.UTC(2017, 7, 29), 211.110000],
			[Date.UTC(2017, 7, 29), 233.330000],
			[Date.UTC(2017, 7, 29), 255.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 122.220000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 144.440000],
			[Date.UTC(2017, 7, 16), 166.670000],
			[Date.UTC(2017, 7, 16), 200.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 122.220000],
			[Date.UTC(2017, 7, 17), 133.330000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 144.440000],
			[Date.UTC(2017, 7, 18), 155.560000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 166.670000],
			[Date.UTC(2017, 7, 18), 177.780000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 188.890000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 133.330000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 144.440000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 166.670000],
			[Date.UTC(2017, 7, 19), 177.780000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 188.890000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 255.560000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 122.220000],
			[Date.UTC(2017, 7, 20), 133.330000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 144.440000],
			[Date.UTC(2017, 7, 20), 155.560000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 166.670000],
			[Date.UTC(2017, 7, 20), 177.780000],
			[Date.UTC(2017, 7, 20), 188.890000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 155.560000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 133.330000],
			[Date.UTC(2017, 7, 22), 155.560000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 111.110000],
			[Date.UTC(2017, 7, 23), 111.110000],
			[Date.UTC(2017, 7, 23), 144.440000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 111.110000],
			[Date.UTC(2017, 7, 24), 122.220000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 144.440000],
			[Date.UTC(2017, 7, 24), 155.560000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 122.220000],
			[Date.UTC(2017, 7, 25), 122.220000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 133.330000],
			[Date.UTC(2017, 7, 25), 155.560000],
			[Date.UTC(2017, 7, 26), 133.330000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 27), 133.330000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 122.220000],
			[Date.UTC(2017, 7, 28), 133.330000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 100.000000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
			[Date.UTC(2017, 7, 29), 111.110000],
		]    }]
}