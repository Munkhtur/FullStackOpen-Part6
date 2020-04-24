import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const addNew = async (content) => {
  const newObject = {
    content,
    votes: 0,
  };
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

export const update = async (id) => {
  const anec = await axios.get(`${baseUrl}/${id}`);
  console.log(anec.data);
  const newAnec = {
    ...anec.data,
    votes: anec.data.votes + 1,
  };
  const response = await axios.put(`${baseUrl}/${id}`, newAnec);
  return response.data;
};
