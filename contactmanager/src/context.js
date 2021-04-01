import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload
        })
      };
    default :
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      { id:1, name: "John Doe", email: "john@gmail.com", phone: '449-2233-23' },
      { id:2, name: "Marko C", email: "marko@gmail.com", phone: '665-2233-23' },
      { id:3, name: "Milos", email: "milos@gmail.com", phone: '449-999-21' }
    ],
    dispatch: action => {
      this.setState(state => {
        return reducer(state, action)
      })
    }
  }

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;