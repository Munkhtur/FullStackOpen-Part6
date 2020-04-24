import React from 'react';
import { useDispatch } from 'react-redux';
import { filterAction } from '../reducers/filterReducer';

const FilterForm = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <div>
      <form>
        Filter
        <input onChange={handleChange} />
      </form>
    </div>
  );
};

export default FilterForm;
