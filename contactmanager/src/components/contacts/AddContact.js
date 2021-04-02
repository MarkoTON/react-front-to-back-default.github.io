import React, { Component } from 'react'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onNameChange = (e) => this.setState({name: e.target.value})
  onEmailChange = (e) => this.setState({email: e.target.value})
  onPhoneChange = (e) => this.setState({phone: e.target.value})

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  
  render() {

    let { name , email, phone } = this.state;

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contect</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Name" 
                value={name}
                onChange={this.onNameChange}
                name="name" 
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter Email" 
                value={email}
                onChange={this.onEmailChange}
                name="name" 
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Phone" 
                value={phone}
                onChange={this.onPhoneChange}
                name="name" 
                />
            </div>
            <input type="submit" value="Add Contact" className="btn btn-block btn-info" />
          </form>
        </div>
      </div>
    )
  }
}

export default AddContact;