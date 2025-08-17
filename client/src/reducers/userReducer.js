const initialState = {
  username: null,
  isLoggedIn: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "username":
      return { ...state, username: payload };
    case "login":
      return { ...state, isLoggedIn: true };
    default:
      return state;
  }
};

export default userReducer;
