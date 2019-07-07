import React from 'react';

const textArea = ({ name, label, onChange, value, rows, error }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea 
                name={name}
                value={value}
                onChange={onChange}
                className="form-control"  
                rows={rows} 
            ></textarea>
            {/*Truesy Notation. If there are errors show an info box.*/}
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default textArea;