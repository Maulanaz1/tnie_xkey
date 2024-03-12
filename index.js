const genId1 = require('juam_xid');
const genId2 = require('nxhl_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|T3NFL9f5oA|' + genId2()).digest('base64');
}


module.exports = generateKey;
