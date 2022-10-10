import React, { useState, useEffect } from 'react';

import ContactList from 'components/ContactList/ContactList';
import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import FormFilter from 'components/FormFilter/FormFilter';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  // /   componentDidMount() {
  //     const contacts = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(contacts);
  //     if (parsedContacts) {
  //       this.setState({ contacts: parsedContacts });
  //     }
  //   }
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  //   componentDidUpdate(PrevProps, prevState) {
  //     if (this.state.contacts !== prevState.contacts) {
  //       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //     }
  //   }

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkContact) {
      return alert(`${data.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, data]);
    }
  };

  const changeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contactId !== contact.id));
  };

  const visibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <Container title={'Phonebook'}>
        <Phonebook onSubmit={addContact} />
      </Container>
      <Container title={'Contacts'}>
        <FormFilter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts()}
          onDeleteContact={deleteContact}
        />
        <div>
          <span>
            {contacts.length > 0
              ? `Number of contacts: ${contacts.length}`
              : 'Нou have no one to call :('}
          </span>
        </div>
      </Container>
    </>
  );
}
