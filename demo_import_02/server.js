const http = require('http');

http.createServer(function (req, res) {
	console.log('res come', req);
	res.writeHead(200, {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "X-Requested-With",
		"Content-Type": "application/json"
	})
	var data = {
		code: 1,
		data: {
			name: 'yeyu',
			age: 24,
			interests: [
				'ts', 'sql', 'python'
			]
		}
	}
	res.end(JSON.stringify(data));
}).listen('9520');

console.log('server has started on port 9520')
