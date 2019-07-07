import React from 'react';

const Like = ({ name, label, liked, onClick }) => {
    let classes = "icon-big icon-red fa fa-heart";
    if(!liked) classes += '-o';
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <i 
                onClick={onClick} 
                style={{ cursor: "pointer" }}
                className={classes} aria-hidden="true"></i> 
        </div>
        );
}
 
export default Like;