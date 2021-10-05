import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmitHandler = data => {
    data.id = uuidv4();
    this.setState(prevState => {
      // console.log(prevState.contacts); // будет разный на каждой итерации
      // Добавляем в масив новый объект
      return { contacts: [...prevState.contacts, data] };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className={s.container}>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        {/* <Contacts contacts={this.state.contacts} /> */}
        <Contacts contacts={visibleContacts} />
      </div>
    );
  }
}

export default App;
