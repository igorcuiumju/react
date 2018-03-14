import React from 'react';
import { container } from 'react-bootstrap';


function Input( { type, name, placeholder } ) {
    return (
        <div className="container" >
            <form className="signup-gorm">
                <br />
                <div className="form-group">
                    <input 
                        type={type}
                        className="form-control" 
                        name={name}
                        placeholder={placeholder} 
                    />
                </div>
            </form>
        </div>
    );
}

export default Input;
