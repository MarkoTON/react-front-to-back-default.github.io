import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

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

    return(
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact contact={contact} key={contact.id} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
              ))} 
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
};

export default Contacts