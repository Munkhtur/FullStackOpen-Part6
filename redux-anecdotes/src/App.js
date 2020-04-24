import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Anecdotes from './components/Anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import FilterForm from './components/FilterForm';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);
  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <FilterForm />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  );
};

export default App;
