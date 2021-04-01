import React, { Component } from 'react'

class Contact extends Component {
  render() {
    const {email, name, phone} =  this.props;

    return (
      <div>
        <h4>Name: {name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;