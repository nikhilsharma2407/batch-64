export const ACTION_TYPES = {
  NAME: "name",
  USERNAME: "username",
  EMAIL: "email",
  PASSWORD: "password",
};

export const initialState = {
  name: {
    value: null,
    isValid: null,
  },
  username: {
    value: null,
    isValid: null,
  },
  email: {
    value: null,
    isValid: null,
  },
  password: {
    value: null,
    validation: {
      hasLowerCase: null,
      hasUpperCase: null,
      hasNumber: null,
      hasSpecialCharacter: null,
      meetsMinChReq: null,
    },
  },
};

const NAME_PATTERN = /^[A-Z][a-z]+$/;
const EMAIL_PATTERN = /^\w+([.+]\w+)?@[a-z]{3,}\.[a-z]{2,}$/;
const USERNAME_PATTERN = /^[a-z\d]+$/;

// action -> {type, payload}
const signupReducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case ACTION_TYPES.NAME:
      // update the state immutabily
      const copyState = { ...state };
      copyState.name = { value: payload, isValid: NAME_PATTERN.test(payload) };
      return copyState;
    case ACTION_TYPES.USERNAME:
      return {
        ...state,
        username: { value: payload, isValid: USERNAME_PATTERN.test(payload) },
      };
    case ACTION_TYPES.EMAIL:
      return {
        ...state,
        email: { value: payload, isValid: EMAIL_PATTERN.test(payload) },
      };
    case ACTION_TYPES.PASSWORD:
      return {
        ...state,
        password: {
          value: payload,
          validation: {
            hasLowerCase: /[a-z]/.test(payload),
            hasUpperCase: /[A-Z]/.test(payload),
            hasNumber: /\d/.test(payload),
            hasSpecialCharacter: /[\W_]/.test(payload),
            meetsMinChReq: payload.length >= 8,
          },
        },
      };
    default:
      return state;
  }
};

export default signupReducer;
