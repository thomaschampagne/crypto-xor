/**
 * @author Thomas Champagne
 * @description Simple symmetric XOR encryption module
 * @see https://en.wikipedia.org/wiki/XOR_cipher
 */
export class CryptoXor {
  /**
   * Encrypt XOR method
   * @param plainString Plain text data to be encoded
   * @param key Crypt key used to XOR plainString
   * @returns Cypher text
   */
  public static encrypt(plainString: string, key: string): string {
    let cypher = '';

    for (let i = 0; i < plainString.length; i++) {
      // Find ascii code from key to be "xor"
      const keyPointer: number = i % key.length;

      // Convert char to int ASCII and "xor crypt" with int ASCII
      const dec: number = plainString[i].charCodeAt(0) ^ key[keyPointer].charCodeAt(0);

      // HEX convert + '0' Padding
      const hex = `00${dec.toString(16)}`.slice(-2);

      // Append to cypher string
      cypher += hex;
    }

    return cypher;
  }

  /**
   * Decrypt XOR method
   * @param cypherString Cypher string to be decoded
   * @param key Crypt key used to XOR cypherString
   * @returns Plain text
   */
  public static decrypt(cypherString: string, key: string): string {
    let plainText = '';
    const cypherArray = [];
    let i;
    // Group cypher by 2 hex char (16bits) into array
    for (i = 0; i < cypherString.length; i = i + 2) {
      cypherArray.push(cypherString[i] + cypherString[i + 1]);
    }

    // XOR Decrypt with provided cypher text and key
    for (i = 0; i < cypherArray.length; i++) {
      const hex = cypherArray[i];
      const dec = parseInt(hex, 16);
      const keyPointer = i % key.length;
      const asciiCode = dec ^ key[keyPointer].charCodeAt(0);
      plainText += String.fromCharCode(asciiCode);
    }
    return plainText;
  }
}
