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
			[Date.UTC(2017, 7, 16), 100.000000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 16), 88.890000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 77.780000],
			[Date.UTC(2017, 7, 17), 88.890000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 77.780000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
			[Date.UTC(2017, 7, 18), 88.890000],
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
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 100.000000],
			[Date.UTC(2017, 7, 19), 111.110000],
			[Date.UTC(2017, 7, 19), 122.220000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 77.780000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 19), 88.890000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 100.000000],
			[Date.UTC(2017, 7, 20), 111.110000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 77.780000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 20), 88.890000],
			[Date.UTC(2017, 7, 21), 100.000000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 133.330000],
			[Date.UTC(2017, 7, 21), 144.440000],
			[Date.UTC(2017, 7, 21), 311.110000],
			[Date.UTC(2017, 7, 21), 88.890000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 77.780000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 77.780000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 77.780000],
			[Date.UTC(2017, 7, 25), 88.890000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 77.780000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 100.000000],
			[Date.UTC(2017, 7, 27), 77.780000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 27), 88.890000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 111.110000],
			[Date.UTC(2017, 7, 28), 88.890000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 111.110000],
			[Date.UTC(2017, 7, 16), 133.330000],
			[Date.UTC(2017, 7, 16), 222.220000],
			[Date.UTC(2017, 7, 16), 233.330000],
			[Date.UTC(2017, 7, 17), 100.000000],
			[Date.UTC(2017, 7, 17), 111.110000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 200.000000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 17), 211.110000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 100.000000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 111.110000],
			[Date.UTC(2017, 7, 18), 122.220000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 200.000000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 211.110000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 222.220000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 233.330000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 244.440000],
			[Date.UTC(2017, 7, 18), 255.560000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 200.000000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 211.110000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 222.220000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 233.330000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 19), 244.440000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 200.000000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 211.110000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 222.220000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 233.330000],
			[Date.UTC(2017, 7, 20), 255.560000],
			[Date.UTC(2017, 7, 21), 111.110000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 122.220000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 188.890000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 200.000000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 211.110000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 222.220000],
			[Date.UTC(2017, 7, 21), 233.330000],
			[Date.UTC(2017, 7, 22), 100.000000],
			[Date.UTC(2017, 7, 22), 111.110000],
			[Date.UTC(2017, 7, 22), 111.110000],
			[Date.UTC(2017, 7, 22), 122.220000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 188.890000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 200.000000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 211.110000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 222.220000],
			[Date.UTC(2017, 7, 22), 255.560000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 22), 88.890000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 100.000000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 188.890000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 23), 211.110000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 222.220000],
			[Date.UTC(2017, 7, 24), 233.330000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 244.440000],
			[Date.UTC(2017, 7, 24), 255.560000],
			[Date.UTC(2017, 7, 25), 111.110000],
			[Date.UTC(2017, 7, 25), 200.000000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 211.110000],
			[Date.UTC(2017, 7, 25), 222.220000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 233.330000],
			[Date.UTC(2017, 7, 25), 244.440000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 111.110000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 233.330000],
			[Date.UTC(2017, 7, 26), 244.440000],
			[Date.UTC(2017, 7, 26), 266.670000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 188.890000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 27), 233.330000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 100.000000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 211.110000],
			[Date.UTC(2017, 7, 28), 222.220000],
			[Date.UTC(2017, 7, 28), 233.330000],
		]    }]
}