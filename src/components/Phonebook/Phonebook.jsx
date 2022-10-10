import React from 'react';
import PropTypes from 'prop-types';
import css from './Phonebook.module.css';
import { useState } from 'react';
import shortId from 'shortid';

export default function Phonebook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = shortId.generate();
  const data = { name, number, id };

  let nameInputId = shortId.generate();
  let numberInputId = shortId.generate();

  const handlechange = e => {
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
    onSubmit(data);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={css.phonebook__form} onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          <span className={css.phonebook__label}>Name</span>
          <input
            type="text"
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={handlechange}
          />
        </label>
        <label htmlFor={numberInputId}>
          <span className={css.phonebook__label}>Number</span>
          <input
            type="tel"
            name="number"
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="XXX-XX-XX"
            value={number}
            onChange={handlechange}
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
