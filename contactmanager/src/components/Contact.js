import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../context';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: false
  }

  onShowClick = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo })
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  }

  
  render() {
    const {id, email, name, phone} =  this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              {/* <h4>Name: {name} <i onClick={this.onShowClick.bind(this,name)} className="fas fa-sort-down"></i></h4> */}
              <h4>Name: {name} 
                <i style={{cursor: 'pointer'}} onClick={this.onShowClick} className="fas fa-sort-down"></i>
                <i className="fas fa-times" onClick={this.onDeleteClick.bind(this, id, dispatch)} style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
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
        }}
      </Consumer>


    )
  }
}

export default Contact;