import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
  constructor(){
    super();

    this.state = {
      contacts: [
        { id:1, name: "John Doe", email: "john@gmail.com", phone: '449-2233-23' },
        { id:2, name: "Marko C", email: "marko@gmail.com", phone: '665-2233-23' },
        { id:3, name: "Milos", email: "milos@gmail.com", phone: '449-999-21' }
      ]
    }
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))} 
      </div>
    )
  }
};

export default Contacts