export function apiLogin(username, password) {
  return new Promise((resolve) =>
    setTimeout(() => {
      if (password.length > 3) {
        return resolve({
          status: 201,
          data: { username, token: 123456 },
        });
      } else {
        return resolve({ status: 403, error: "Wrong username or password." });
      }
    }, 500)
  );
}
