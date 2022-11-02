import React from 'react';
import css from './ContactList.module.css';
import shortId from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/ContactsSlice';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // console.log(contacts);

  const list = () => {
    return contacts.filter(e => e.name.toLowerCase().includes(filter));
  };

  return (
    <ul className={css.contactList}>
      {list().map(({ id, name, number }) => {
        return (
          <li key={id || shortId.generate()} className={css.contactList__item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.contactList__btn}
              onClick={() => dispatch(deleteContact(id))}
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
