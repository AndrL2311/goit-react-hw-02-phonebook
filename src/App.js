import React from 'react';

import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`Signed up as: ${this.state.name}`);

    // Проп который передается форме для вызова при сабмите
    // this.props.onSubmit(this.state.name);
  };

  render() {
    const { name } = this.state;

    return (
      <div className={s.container}>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button className={s.button} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default App;
