import React from 'react';

import ContactList from 'components/ContactList/ContactList';
import Container from './Container/Container';
import Phonebook from './Phonebook/Phonebook';
import FormFilter from 'components/FormFilter/FormFilter';

export default function App() {
  return (
    <>
      <Container title={'Phonebook'}>
        <Phonebook />
      </Container>
      <Container title={'Contacts'}>
        <FormFilter />
        <ContactList />
      </Container>
    </>
  );
}
