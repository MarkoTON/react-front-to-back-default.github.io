import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header  /> */}
        <Header branding="Contact Manager!" />
        <Contact name="John Doe" email="jonD@gmail.com" phone="555-44-33" />
        <Contact name="Marko C" email="marko@gmail.com" phone="698-98-65" />
      </div>
    );
  }
}

export default App;
