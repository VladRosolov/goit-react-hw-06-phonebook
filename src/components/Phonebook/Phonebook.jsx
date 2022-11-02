import React from 'react';
import css from './Phonebook.module.css';
import { useState } from 'react';
import shortId from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'store/ContactsSlice';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const contactIsExist = (name, number) => {
    return contacts.find(
      item =>
        item.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        item.number === number
    );
  };

  const addContacts = (name, number) => {
    if (contactIsExist(name, number)) {
      return alert(`${name} ${number} is already in Phonebook`);
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContacts(name, number);
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
