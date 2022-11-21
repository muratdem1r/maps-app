import jwt_decode from "jwt-decode";

// Actions
import { setUser } from "store/actions";

function stayLoggedin(dispatch) {
  const token = localStorage.getItem("token");
  if (token) {
    const user = jwt_decode(token);

    // Check token is valid
    if (user.sub) {
      dispatch(setUser(user));
    }
  }
}

export default stayLoggedin;
