// Actions
import { setUser } from "store/actions";

function stayLoggedin(dispatch) {
  const user = localStorage.getItem("user");
  if (user) {
    dispatch(setUser(user));
  }
}

export default stayLoggedin;
