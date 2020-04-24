const initialState = '';

export const filterAction = (content) => {
  return {
    type: 'FILTER',
    data: content,
  };
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data;
    default:
      return state;
  }
};

export default filterReducer;
