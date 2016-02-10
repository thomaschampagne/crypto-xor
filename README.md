# XORCrypt
Simple mixing symetric XOR cryptography node module

## Node script example

```javascript
var XORCrypt = require('./XORCrypt');

var symetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

var plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

var cypherText = XORCrypt.encode(plainText, symetricKey);

console.log('Encoded: ' + cypherText);

var decodedCypher = XORCrypt.decode(cypherText, symetricKey);

console.log('Decoded: ' + decodedCypher);
```

## Example output
```
$ node example.js
Plain Text: 	I have a secret for you !
Encoded: 		7c7f2f0a48330110190608245f010c14212458764205547f14
Decoded: 		I have a secret for you !
```
