# crypto-xor
Simple mixing symetric XOR cryptography node module

## Install
```bash
npm install --save-dev crypto-xor
```

## Example use

```javascript
var cryptoXor = require('crypto-xor');

var symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

var plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

var cypherText = cryptoXor.encode(plainText, symmetricKey);

console.log('Encoded: ' + cypherText);

var decodedCypher = cryptoXor.decode(cypherText, symmetricKey);

console.log('Decoded: ' + decodedCypher);
```

## Example output
```
$ node example.js
Plain Text: I have a secret for you !
Encoded: 7c7f2f0a48330110190608245f010c14212458764205547f14
Decoded: I have a secret for you !
```
