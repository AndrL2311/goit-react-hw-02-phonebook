import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './App.module.css';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <div className={s.container}>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
