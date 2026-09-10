/**
 * RSA Crypto Library
 * Uses a fixed public key for encryption
 * Decryption requires the corresponding private key
 */

const RSACrypto = {
    version : '11092026',
    // Fixed public key for encryption
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgE4IOfB4KDPvHbNix8M7creGdaZL
vgaup6LHQ7hX+HhCMnszbnvhoqjdp/MU9bQBLHSrRvAV/XbdKmvBBetb5y4gjurT
ST081K/6kBOMO5HsuYbHnLsoDVY05BPLkICdCcpG8pKr9Y7UAf+NlWY6zRmaBY2G
NDEQI1QtHEi+jbJbAgMBAAE=
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
