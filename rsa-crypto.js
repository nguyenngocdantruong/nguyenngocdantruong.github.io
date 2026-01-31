/**
 * RSA Crypto Library
 * Uses a fixed public key for encryption
 * Decryption requires the corresponding private key
 */

const RSACrypto = {
    // Fixed public key for encryption
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApEiSR3pZclT+uWQGAzPp
cDXlQ0ChCsfvfLqfvi//efkx5dIPECVOErZpxe7Ch0Z1e+fXwxUInzIaTEK5V9/J
BUJJycGQFkgUokHeEmyFLoz0UiRNtG5PG/0Zfzw3NWeW1C2eOA4xtHGeAiKeT1hS
/nEdTNQdJiOvHV/iRKFr2GI7itJixEmG97d/30dhP69ODh5W9pHz1cepBQk9Zy/u
kavRqkRb5OHzBQFqD/9mGQs8hp/dVjE61kwACvZq74RqRAN0hOGao7+9KvmVuPMz
AmQBILTgezv0XayNbLk8pxYC/s9gFF+VsW7FoFmz/YQhkgiwohNSSTSoPYheaD/5
ewIDAQAB
-----END PUBLIC KEY-----`,

    /**
     * Encrypt a message using the fixed public key
     * @param {string} message - The message to encrypt
     * @returns {string|false} - Base64 encoded encrypted message, or false if failed
     */
    encrypt: function(message) {
        try {
            const encrypt = new JSEncrypt();
            encrypt.setPublicKey(this.publicKey);
            return encrypt.encrypt(message);
        } catch (error) {
            console.error('Encryption error:', error);
            return false;
        }
    },

    /**
     * Decrypt a message using a private key
     * @param {string} encryptedMessage - Base64 encoded encrypted message
     * @param {string} privateKey - PEM formatted private key
     * @returns {string|false} - Decrypted message, or false if failed
     */
    decrypt: function(encryptedMessage, privateKey) {
        try {
            const decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);
            return decrypt.decrypt(encryptedMessage);
        } catch (error) {
            console.error('Decryption error:', error);
            return false;
        }
    }
};
