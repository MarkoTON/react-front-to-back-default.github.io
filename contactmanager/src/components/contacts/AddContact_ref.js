import React, { Component } from 'react'

class AddContact extends Component {

  constructor(props){
    super(props);

    this.nameInput = React.createRef()
    this.emailInput = React.createRef()
    this.phoneInput = React.createRef()
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state)
    let contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact)
  }

  static defaultProps = {
    name: 'Fread Smith',
    email: 'fred@gmail.com',
    phone: '443-44-5-6-66'
  }
  
  render() {

    let { name , email, phone } = this.props;

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
                defaultValue={name}
                ref={this.nameInput}
                name="name" 
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Enter Email" 
                defaultValue={email}
                ref={this.emailInput}
                name="name" 
                />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input 
                type="text" 
                className="form-control form-control-lg" 
                placeholder="Enter Phone" 
                defaultValue={phone}
                ref={this.phoneInput}
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