var XORCrypt = require('./XORCrypt');

var symetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

var plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

var cypherText = XORCrypt.encode(plainText, symetricKey);

console.log('Encoded: ' + cypherText);

var decodedCypher = XORCrypt.decode(cypherText, symetricKey);

console.log('Decoded: ' + decodedCypher);