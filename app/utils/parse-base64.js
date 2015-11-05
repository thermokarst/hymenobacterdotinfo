export default function parseBase64(token) {
  let tokenData;
  try {
    tokenData = atob(token.split('.')[1]);
    return JSON.parse(tokenData);
  } catch (e) {
    return token;
  }
}
