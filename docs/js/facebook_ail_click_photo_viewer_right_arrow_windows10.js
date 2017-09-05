var facebook_ail_click_photo_viewer_right_arrow_windows10 = {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'facebook_ail_click_photo_viewer_right_arrow_windows10'
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
			[Date.UTC(2017, 7, 23), 155.560000],
			[Date.UTC(2017, 7, 23), 166.670000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 166.670000],
			[Date.UTC(2017, 7, 24), 166.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 66.670000],
			[Date.UTC(2017, 7, 24), 77.780000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 144.440000],
			[Date.UTC(2017, 7, 25), 177.780000],
			[Date.UTC(2017, 7, 25), 333.330000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 25), 66.670000],
			[Date.UTC(2017, 7, 26), 144.440000],
			[Date.UTC(2017, 7, 26), 155.560000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 26), 166.670000],
			[Date.UTC(2017, 7, 26), 200.000000],
			[Date.UTC(2017, 7, 26), 211.110000],
			[Date.UTC(2017, 7, 27), 144.440000],
			[Date.UTC(2017, 7, 27), 166.670000],
			[Date.UTC(2017, 7, 27), 166.670000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 177.780000],
			[Date.UTC(2017, 7, 27), 200.000000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 66.670000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 28), 77.780000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 66.670000],
			[Date.UTC(2017, 7, 29), 77.780000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 66.670000],
			[Date.UTC(2017, 7, 30), 77.780000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 7, 31), 66.670000],
			[Date.UTC(2017, 8, 1), 100.000000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 66.670000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 77.780000],
			[Date.UTC(2017, 8, 1), 88.890000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 66.670000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 77.780000],
			[Date.UTC(2017, 8, 2), 88.890000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 55.560000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 66.670000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 3), 88.890000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 88.890000],
			[Date.UTC(2017, 8, 4), 100.000000],
			[Date.UTC(2017, 8, 4), 66.670000],
			[Date.UTC(2017, 8, 4), 66.670000],
		]    }, {
		name: 'chrome',
		data: [
			[Date.UTC(2017, 7, 23), 111.110000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 33.330000],
			[Date.UTC(2017, 7, 23), 44.440000],
			[Date.UTC(2017, 7, 23), 66.670000],
			[Date.UTC(2017, 7, 23), 88.890000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 100.000000],
			[Date.UTC(2017, 7, 24), 133.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 33.330000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 55.560000],
			[Date.UTC(2017, 7, 24), 88.890000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 100.000000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 22.220000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 33.330000],
			[Date.UTC(2017, 7, 25), 88.890000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 100.000000],
			[Date.UTC(2017, 7, 26), 122.220000],
			[Date.UTC(2017, 7, 26), 77.780000],
			[Date.UTC(2017, 7, 26), 88.890000],
			[Date.UTC(2017, 7, 27), 100.000000],
			[Date.UTC(2017, 7, 27), 111.110000],
			[Date.UTC(2017, 7, 27), 122.220000],
			[Date.UTC(2017, 7, 27), 122.220000],
			[Date.UTC(2017, 7, 27), 122.220000],
			[Date.UTC(2017, 7, 27), 22.220000],
			[Date.UTC(2017, 7, 28), 22.220000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 33.330000],
			[Date.UTC(2017, 7, 28), 44.440000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 33.330000],
			[Date.UTC(2017, 7, 29), 44.440000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 33.330000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 44.440000],
			[Date.UTC(2017, 7, 30), 55.560000],
			[Date.UTC(2017, 7, 31), 22.220000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 33.330000],
			[Date.UTC(2017, 7, 31), 44.440000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 33.330000],
			[Date.UTC(2017, 8, 1), 55.560000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 33.330000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 2), 55.560000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 33.330000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 3), 44.440000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 44.440000],
			[Date.UTC(2017, 8, 4), 55.560000],
			[Date.UTC(2017, 8, 4), 22.220000],
			[Date.UTC(2017, 8, 4), 33.330000],
			[Date.UTC(2017, 8, 4), 33.330000],
		]    }]
}