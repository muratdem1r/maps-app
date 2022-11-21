function checkLoggedin() {
  const user = localStorage.getItem("user");
  if (user) return true;

  return false;
}

export default checkLoggedin;
