var xorcrypt = require('./xorcrypt');

var symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

var plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

var cypherText = xorcrypt.encode(plainText, symmetricKey);

console.log('Encoded: ' + cypherText);

var decodedCypher = xorcrypt.decode(cypherText, symmetricKey);

console.log('Decoded: ' + decodedCypher);
