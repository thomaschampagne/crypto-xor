# crypto-xor
Simple symmetric XOR encryption library

No dependencies 

Works in Browser and Node

## Install
```bash
npm install crypto-xor
```

## Sample use

```javascript
import { cryptoXor } from 'crypto-xor';

const symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

const plainText = 'I have a secret fo.gitignorer you !';

console.log('Plain Text: ' + plainText);

const cypherText = cryptoXor.encrypt(plainText, symmetricKey);

console.log('Encoded: ' + cypherText);

const decodedCypher = cryptoXor.decrypt(cypherText, symmetricKey);

console.log('Decoded: ' + decodedCypher);
```

## Sample output
```
Plain Text: I have a secret for you !
Encoded: 7c7f2f0a48330110190608245f010c14212458764205547f14
Decoded: I have a secret for you !
```
