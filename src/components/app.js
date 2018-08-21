import React, { Component } from 'react';

import Letter from './letter';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Santa Letter</h1>
        <Letter />
      </div>
    );
  }
}


