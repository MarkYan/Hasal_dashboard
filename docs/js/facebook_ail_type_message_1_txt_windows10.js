var facebook_ail_type_message_1_txt_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_type_message_1_txt_windows10'
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
			[Date.UTC(2017, 7, 20), 11.110000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 22.220000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 33.330000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 55.560000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 20), 66.670000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 21), 33.330000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 33.330000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 44.440000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 55.560000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 22.220000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 55.560000],
			[Date.UTC(2017, 7, 24), 11.110000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 44.440000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 11.110000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 33.330000],
			[Date.UTC(2017, 7, 26), 44.440000],
			[Date.UTC(2017, 7, 26), 55.560000],
			[Date.UTC(2017, 7, 26), 66.670000],
			[Date.UTC(2017, 7, 26), 66.670000],
			[Date.UTC(2017, 7, 27), 55.560000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 66.670000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 11.110000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 28), 55.560000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 22.220000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 29), 5.560000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 11.110000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 22.220000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 11.110000],
			[Date.UTC(2017, 7, 31), 22.220000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 55.560000],
			[Date.UTC(2017, 8, 1), 11.110000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 22.220000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 55.560000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 20), 5.560000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 11.110000],
			[Date.UTC(2017, 7, 21), 22.220000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 21), 5.560000],
			[Date.UTC(2017, 7, 22), 22.220000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 22), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 23), 5.560000],
			[Date.UTC(2017, 7, 24), 22.220000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 24), 5.560000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 25), 5.560000],
			[Date.UTC(2017, 7, 26), 11.110000],
			[Date.UTC(2017, 7, 26), 22.220000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 26), 5.560000],
			[Date.UTC(2017, 7, 27), 11.110000],
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
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 30), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 7, 31), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 1), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
			[Date.UTC(2017, 8, 2), 5.560000],
		]    }]
}