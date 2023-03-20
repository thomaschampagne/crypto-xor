import { describe, expect, it } from 'vitest';
import { CryptoXor } from '../src';

describe('CryptoXor', () => {
  it('should encrypt & decrypt secret using symmetric key', () => {
    // Given
    const symmetricKey = '5_Gk>V!q9umG-dx4GK*V;j!_';
    const plainText = 'I have a secret for you !';

    // When
    const cypherText = CryptoXor.encrypt(plainText, symmetricKey);

    // Then
    const decodedCypher = CryptoXor.decrypt(cypherText, symmetricKey);
    expect(decodedCypher).toEqual(plainText);
  });
});
