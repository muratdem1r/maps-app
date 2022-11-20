const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isLoading: true };
    case "LOGIN_SUCCESS":
      return { user: action.payload, error: null, isLoading: false };
    case "LOGIN_ERROR":
      return { error: action.payload, user: null, isLoading: false };

    case "SET_USER":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null, error: null };

    default:
      return state;
  }
};
