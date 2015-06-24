export default function parseBase64(token) {
  let tokenData = atob(token.split('.')[1]);
  try {
    return JSON.parse(tokenData);
  } catch (e) {
    return tokenData;
  }
}
