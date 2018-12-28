import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header branding="contact manager" />
        <Contact
          email="karen@gmail.com"
          name="Karen Smith"
          phone="555-555-5555"
        />
      </div>
    );
  }
}

export default App;
