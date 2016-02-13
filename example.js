var XORCrypt = require('./XORCrypt');

var symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

var plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

var cypherText = XORCrypt.encode(plainText, symmetricKey);

console.log('Encoded: ' + cypherText);

var decodedCypher = XORCrypt.decode(cypherText, symmetricKey);

console.log('Decoded: ' + decodedCypher);
