var MongoClient = require('mongodb').MongoClient;
let urlDB;

// connection pool
MongoClient.connect("mongodb://localhost:27017", function(err, client) {
	urlDB = client.db('shortUrls');
})

const addUrlToDB = (url, shorterURL, cb) => {
	const row = {
		url,
		shorterURL,
	}
	urlDB.collection("urls").insertOne(row, (err, res) => {
		if (err) {
			cb(err);
		} else {
			cb(null, res);
		}
	})
}

module.exports = {
	addUrlToDB,
}