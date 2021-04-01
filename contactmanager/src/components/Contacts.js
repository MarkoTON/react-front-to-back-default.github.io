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
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact => {
      return contact.id !== id;
    });

    this.setState({ contacts: newContacts });
    // console.log(id);
    // console.log("object");
  }

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        ))} 
      </React.Fragment>
    )
  }
};

export default Contacts