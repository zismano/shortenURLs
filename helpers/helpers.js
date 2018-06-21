var Hashids = require('hashids');

const makeShorterURL = function(url) {
  var h = 0, l = url.length, i = 0;
  console.log('some');
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + url.charCodeAt(i++) | 0;
  var hashids = new Hashids();
  return hashids.encode(h);
}

module.exports = {
	makeShorterURL,
}