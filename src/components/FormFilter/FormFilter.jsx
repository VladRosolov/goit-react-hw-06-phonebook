import React from 'react';
import PropTypes from 'prop-types';
import css from './FormFilter.module.css';

const FormFilter = ({ value, onChange }) => {
  return (
    <label>
      <span className={css.filter__title}>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

FormFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FormFilter;
