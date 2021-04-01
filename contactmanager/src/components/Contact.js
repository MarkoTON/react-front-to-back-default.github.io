import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
  };

  state = {
    showContactInfo: false
  }

  // onShowClick = (name) => {
  //   console.log(this.state);
  //   console.log(name);
  // }
  onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo })
    // console.log(this.state.showContactInfo);
  }

  onDeleteClick = (e) => {
    console.log('click');
    this.props.deleteClickHandler();
  }

  
  render() {
    const {email, name, phone} =  this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        {/* <h4>Name: {name} <i onClick={this.onShowClick.bind(this,name)} className="fas fa-sort-down"></i></h4> */}
        <h4>Name: {name} 
          <i style={{cursor: 'pointer'}} onClick={this.onShowClick} className="fas fa-sort-down"></i>
          <i className="fas fa-times" onClick={this.onDeleteClick} style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
        </h4>
        {showContactInfo ? 
          (<ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>)
          : null
        }
      </div>
    )
  }
}

// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contact;