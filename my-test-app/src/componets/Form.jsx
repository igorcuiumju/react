import React from 'react';
import { container } from 'react-bootstrap';
import Input from './input.jsx'

function Form({ onSubmit }) {
  return(
    <div className="container" >
      <form  className="signup-gorm" onSubmit={ onSubmit } >
      <br />
        <div className="form-group">
          <Input type="text" className="form-control" name="firstname" placeholder="Name" />
        </div>
        <div className="form-group">
          <Input type="text" className="form-control" name="lastname" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <Input type="email" className="form-control" name="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <Input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
         <Input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" > Register</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
