const initialState = {
  count: 0,
};

export const COUNTER_ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

export const incrementActionCreator = (payload) => {
  return { type: COUNTER_ACTIONS.INCREMENT, payload };
};

// actionCreator is a fn to return the action
export const asyncIncrementActionCreator = (payload) => {
  return async (dispatch) => {
    const networkReq = new Promise((res) => {
      setTimeout(() => {
        res(payload);
      }, 5000);
    });
    const data = await networkReq;
    dispatch(incrementActionCreator(data));
  };
};

// actionCreator is a fn to return the action

export const decrementActionCreator = (payload) => {
  return { type: COUNTER_ACTIONS.DECREMENT, payload };
};

const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, count: state.count + payload };

    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, count: state.count - payload };

    default:
      return state;
  }
};

export default countReducer;
