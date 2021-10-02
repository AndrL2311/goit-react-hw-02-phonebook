import React from 'react';

import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <div className={s.container}></div>;
  }
}

export default App;
