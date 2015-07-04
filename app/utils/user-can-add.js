export default function userCanAdd(role) {
  return (role === 'W') || (role === 'A');
}
