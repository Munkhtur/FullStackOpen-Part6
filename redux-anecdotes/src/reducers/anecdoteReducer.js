import { addNew, getAll, update } from '../services/anecdotes';

export const createNew = (content) => async (dispatch) => {
  const newNote = await addNew(content);
  dispatch({
    type: 'ADD_NEW',
    data: newNote,
  });
};

export const vote = (id) => async (dispatch) => {
  const toUpdate = await update(id);
  dispatch({
    type: 'VOTE',
    data: toUpdate,
  });
};

const asObject = (anecdote) => {
  return {
    ...anecdote,
    votes: 0,
  };
};

export const initializeAnecdotes = () => async (dispatch) => {
  const all = await getAll();
  dispatch({
    type: 'INIT_ANECDOTES',
    data: all,
  });
};

const initialState = [];

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'VOTE':
      const toUpdate = state.find((a) => a.id === action.data.id);
      return state.map((a) => (a !== toUpdate ? a : action.data));
    case 'ADD_NEW':
      const anecToAdd = asObject(action.data);
      return [...state, anecToAdd];
    case 'INIT_ANECDOTES':
      return action.data;
    default:
      return state;
  }
};

export default anecdoteReducer;
