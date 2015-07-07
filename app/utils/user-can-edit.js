export default function userCanEdit(currentUser, author) {
  let id = currentUser.id;
  let role = currentUser.role;
  return (role === 'W' && (+id === author)) || (role === 'A');
}
