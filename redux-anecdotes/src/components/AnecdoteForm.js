import React from 'react';
import { connect } from 'react-redux';
import { createNew } from '../reducers/anecdoteReducer';
import { notify } from '../reducers/notificationReducer';

const AnecdoteForm = ({ notify, createNew }) => {
  // const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    createNew(content);
    notify(`new anecdote ${content}`, 2000);
  };
  return (
    <form onSubmit={addAnecdote}>
      <h2>create new</h2>
      <div>
        <input name='anecdote' />
      </div>
      <button type='submit'>create</button>
    </form>
  );
};

export default connect(null, { notify, createNew })(AnecdoteForm);
