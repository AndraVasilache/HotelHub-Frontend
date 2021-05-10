import * as Crypto from 'expo-crypto';

const hashUser = async ({ email, password }) => (
  Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256,
    email + password));

export default hashUser;
