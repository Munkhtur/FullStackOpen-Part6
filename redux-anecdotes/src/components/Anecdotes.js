import React from 'react';
import { vote } from '../reducers/anecdoteReducer';
import { connect } from 'react-redux';
import { notify } from '../reducers/notificationReducer';

const Anecdotes = ({ anecdotes, filter, vote, notify }) => {
  // const anecdotes = useSelector((state) => state.anecdotes);
  // const filter = useSelector((state) => state.filter);

  const byVote = (a1, a2) => a2.votes - a1.votes;

  const result = anecdotes.filter((a) =>
    a.content.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  const voteButton = ({ id, content }) => {
    vote(id);
    notify(`you voted for ${content}`, 3000);
  };

  const anecdotesToshow = result.length > 0 ? result : anecdotes;

  return (
    <div>
      {anecdotesToshow.sort(byVote).map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() =>
                voteButton({ content: anecdote.content, id: anecdote.id })
              }
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { anecdotes: state.anecdotes, filter: state.filter };
};

export default connect(mapStateToProps, { vote, notify })(Anecdotes);
