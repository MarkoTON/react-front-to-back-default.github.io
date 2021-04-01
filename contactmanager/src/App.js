import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header  /> */}
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact name="John Doe" email="jonD@gmail.com" phone="555-44-33" />
          <Contact name="Marko Canovic" email="marko@gmail.com" phone="698-98-65" />
        </div>
      </div>
    );
  }
}

export default App;
