import React from 'react';

const Input = ({ type, name, label, value, error, onChange, container, placeholder, className }) => {
    return ( 
        <div className={className}>
            <label htmlFor={name}>{label}</label>
            {/*In react, to access an html element value. We use ref, a JSX attr 
            instead of document object as in plain javascript. */}
            <input
                type={type} 
                name={name}
                container={container} 
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                id={name}
                className="form-control form-control-md"
            />
                {/*Truesy Notation. If there are errors show an info box.*/}
                {error && <div className="alert alert-danger">{error}</div>}
                {type==='number'?<small className="form-text text-muted">It's okay. We won't haunt you.</small>:''}
        </div>
    );
}
 
export default Input;