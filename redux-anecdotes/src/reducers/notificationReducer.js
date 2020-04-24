export const notify = (content, time) => async (dispatch) => {
  dispatch({
    type: 'SHOW',
    data: content,
  });
  setTimeout(() => {
    dispatch({
      type: 'CLEAR',
    });
  }, time);
};

const initialState = [];

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return [...state, action.data];
    case 'CLEAR':
      return (state = []);
    default:
      return state;
  }
};

export default notificationReducer;
