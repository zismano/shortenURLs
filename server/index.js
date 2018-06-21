const {makeShorterURL} = require('../helpers/helpers');
const mongo = require('../database/index');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.json());

var path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/url', (req, res) => {
});

app.post('/url/fetch', (req, res) => {
	let url = decodeURIComponent(req.query.url);
	console.log('url is',url);
	let shorterURL = makeShorterURL(url);
	console.log('Shorter is', shorterURL);
	mongo.addUrlToDB(url, shorterURL, (err, resDB) => {
		if (err) {
			throw err;
		}
		res.send(shorterURL);
	});
})

app.listen(8080);