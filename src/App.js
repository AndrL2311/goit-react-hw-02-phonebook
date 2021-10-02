import React from 'react';

import s from './App.module.css';
import Form from './components/Form/Form';

class App extends React.Component {
  formSubmitHandler = data => {
    console.log(data);
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
