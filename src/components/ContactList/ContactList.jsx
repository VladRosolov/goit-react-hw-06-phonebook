import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactList__item}>
        <p>
          {name}: {number}
        </p>
        <button
          className={css.contactList__btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
