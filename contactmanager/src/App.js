import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let name = 'Larry';
    let showHello = true;
    let showMath = true;
    let num1 = 40;
    let num2 = 33;

    let math;
    if(showMath){
      math = <h4>{num1} + {num2} = {num1 + num2}</h4>
      // Pravilno se pise kao sto je dole napisano
      // math = (
      // <h4>{num1} + {num2} = {num1 + num2}</h4>
      // );

    } else {
      math = null;
    }

    return (
      <div className="App">
        <p>The App Component</p>
        {showHello ? <h4>Hello {name.toUpperCase()}</h4> : <p>:P</p>}
        {math}
      </div>
    );
  }
}

export default App;
