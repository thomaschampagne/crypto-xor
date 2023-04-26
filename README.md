# crypto-xor

Simple symmetric XOR encryption library for Browser and Node.

No dependencies required

<!-- toc -->

- [Install](#install)
- [Usage](#usage)
- [Development](#development)
  - [Setup](#setup)
  - [Build library](#build-library)
  - [Run tests](#run-tests)
  - [Run linting check](#run-linting-check)
  - [Generate library documentation](#generate-library-documentation)
  - [Update library dependencies](#update-library-dependencies)
  - [Integrate library](#integrate-library)
- [Appendix](#appendix)
  - [Update the table of content of this readme](#update-the-table-of-content-of-this-readme)

<!-- tocstop -->

## Install

```bash
npm install crypto-xor
```

## Usage

Sample

```typescript
import { CryptoXor } from 'crypto-xor';

const symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';

const plainText = 'I have a secret for you !';

console.log('Plain Text: ' + plainText);

const cypherText = CryptoXor.encrypt(plainText, symmetricKey);

console.log('Encoded: ' + cypherText);

const decodedCypher = CryptoXor.decrypt(cypherText, symmetricKey);

console.log('Decoded: ' + decodedCypher);
```

Output

```
Plain Text: I have a secret for you !
Encoded: 7c7f2f0a48330110190608245f010c14212458764205547f14
Decoded: I have a secret for you !
```
## Development

### Setup

- Install the latest version of [pnpm](https://pnpm.io/) globally 

```bash
npm uninstall -g pnpm
npm install -g pnpm@latest
```

_Note: If you never installed `pnpm` before, you may need to reload your shell to access `pnpm` CLI._

- Then install the lib dependencies

```bash
pnpm install
```

### Build library

```bash
pnpm run build
```

### Run tests

```bash
pnpm run test
```

### Run linting check

```bash
pnpm run lint
```

Fix errors with:

```bash
pnpm run lint:fix
```

### Generate library documentation

```bash
pnpm run docs
```

Documentation is generated using [TypeDoc](https://typedoc.org/).

### Update library dependencies

```bash
pnpm run upgrade:libs
```

### Integrate library

Run common tasks all-in-once:

- Update to latest dependencies and install them
- TypeScript check
- Lint fixes
- Tests
- Build
- Update `README.md` table of content
- Generate documentation


```bash
pnpm run integrate
```

## Appendix

### Update the table of content of this readme

```bash
pnpm run readme:toc
```
