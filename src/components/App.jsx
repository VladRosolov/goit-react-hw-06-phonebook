import React, { Component } from 'react';
import shortId from 'shortid';
import ContactList from 'components/ContactList/ContactList';
import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import FormFilter from 'components/FormFilter/FormFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(PrevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortId.generate(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => {
      const checkContact = this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (checkContact) {
        alert(`${name} is already in contacts`);
        return contacts;
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <>
        <Container title={'Phonebook'}>
          <Phonebook onSubmit={this.addContact} />
        </Container>
        <Container title={'Contacts'}>
          <FormFilter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
          <div>
            <span>
              {contacts.length > 0
                ? `Number of contacts: ${visibleContacts.length}`
                : 'Нou have no one to call :('}
            </span>
          </div>
        </Container>
      </>
    );
  }
}

export default App;
