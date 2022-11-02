import React from 'react';
import css from './FormFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/FilterSlice';

const FormFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const filterOnChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <label>
      <span className={css.filter__title}>Find contacts by name</span>
      <input type="text" value={filterValue} onChange={filterOnChange} />
    </label>
  );
};

export default FormFilter;
