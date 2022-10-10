import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import shortId from 'shortid';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id || shortId.generate()} className={css.contactList__item}>
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
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};
