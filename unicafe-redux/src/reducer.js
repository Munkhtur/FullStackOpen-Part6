const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      let newState = {
        ...state,
        good: state.good + 1,
      };
      return newState;
    case 'OK':
      let okState = {
        ...state,
        ok: state.ok + 1,
      };
      return okState;
    case 'BAD':
      let badSt = {
        ...state,
        bad: state.bad + 1,
      };
      return badSt;
    case 'ZERO':
      let zeroSt = {
        good: 0,
        ok: 0,
        bad: 0,
      };
      return zeroSt;
    default:
      return state;
  }
};

export const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      let newState = {
        ...state,
        good: state.good + 1,
      };
      return newState;
    case 'OK':
      let okState = {
        ...state,
        ok: state.ok + 1,
      };
      return okState;
    case 'BAD':
      let badSt = {
        ...state,
        bad: state.bad + 1,
      };
      return badSt;
    case 'ZERO':
      let zeroSt = {
        good: 0,
        ok: 0,
        bad: 0,
      };
      return zeroSt;
    default:
      return state;
  }
};
