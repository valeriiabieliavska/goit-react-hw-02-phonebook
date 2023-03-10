import { Component } from 'react';
// import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.state.contacts.find(e => e.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };


  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={this.state.filter} setFilter={this.handleFilter} />
        <ContactList contacts={filteredContacts} onClick={this.handleDelete} />
      </>
    );
  }
}
