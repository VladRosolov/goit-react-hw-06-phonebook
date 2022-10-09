import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';
import { useState } from 'react';

export default function Phonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const Handlechange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn('Error!');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.phonebook__form} onSubmit={handleSubmit}>
        <label>
          <span className={css.phonebook__label}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={Handlechange}
          />
        </label>
        <label>
          <span className={css.phonebook__label}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="XXX-XX-XX"
            value={number}
            onChange={Handlechange}
          />
        </label>
        <button type="submit" className={css.phonebook__btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

Phonebook.propTypes = { onSubmit: PropTypes.func.isRequired };
