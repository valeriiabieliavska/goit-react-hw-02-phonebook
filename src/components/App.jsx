import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';

import css from './App.module.css';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };


  addContact = data => {
    console.log(data);

    const contact = {
      id: nanoid(),
      name: '',
      number: '',
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };



  render() {
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList/>
      </>
    );
  }
}
