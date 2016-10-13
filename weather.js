var request = require('request');

module.exports = function (location) {
	return new Promise (function (resolve, reject) {

		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=ef37cb7536c45a78a764112aaecb250d&q=' + encodedLocation + '&units=imperial';
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject("Unable to fetch weather.");
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
				//resolve(body);
			}
		});
	});
};