import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            {/*In react, to access an html element value. We use ref, a JSX attr 
            instead of document object as in plain javascript. */}
            <select name={name} id={name} {...rest} className="form-control">
                <option value="" />
                {options.map(option => <option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {/*Truesy Notation. If there are errors show an info box.*/}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
 
export default Select;