// require crypto
const CryptoJS = require('crypto-js');

const decrypt = function (rawKey, encryptedData) {
    // split the key and iv by :
    const splited = encryptedData.split(':');
    const iv = splited[0]
    const encrypted = splited[1]

    // iv to bytes
    var ivBytes = CryptoJS.enc.Base64.parse(iv);

    var key = CryptoJS.enc.Utf8.parse(rawKey);

    // use cryptojs to decrypt data
    const decryptedData = CryptoJS.AES.decrypt(encrypted, key, {
        iv: ivBytes,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // return decrypted data
    return decryptedData.toString(CryptoJS.enc.Utf8);
}
