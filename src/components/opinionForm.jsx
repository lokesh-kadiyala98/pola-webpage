import React from 'react';
import Joi from 'joi';
import Form from './form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class opinionForm extends Form {
    
    state = {
        data: { email: '', name: '', number: '', experience: '',like: false},
        errors: { },
    };
    
    //schema is an object used by the Joi library to validate input 
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().label('Email'),
        name: Joi.string().required().label('Name'),
        experience: Joi.string().required().label('Experience'),
        number: Joi.number().required().label('Contact No'),
        like: Joi.boolean().allow(null, '')
    };
    
    //server code
    doSubmit = () => {
        
        //call the server, and redirect to another page
        //..

        // const params = { 
        //     email: this.state.data.email, 
        //     name: this.state.data.name,
        //     experience: this.state.data.experience, 
        //     number: this.state.data.number, 
        //     like: this.state.data.like 
        // };

        // var esc = encodeURIComponent;
        // var query = Object.keys(params)
        //     .map(k => esc(k) + '=' + esc(params[k]))
        //     .join('&');

        // fetch('http://localhost:5000/send_opinion?'+query)
        //     .then(response => response.json())
        //     .then(response => {
        //         if(response.success){
        //             toast.success('Thankyou!! We took a note of that.')
        //         }else{
        //             toast.error('UH! OH! Something\'s wrong. It\'s on us.')
        //         }
        //     })
        //     .catch(response => {
        //         toast.error('UH! OH! Something\'s wrong. It\'s on us.')
        //         console.log(response)
        //     })

        toast.info('Backend is temporarily unavailable. It\'s on us not on you.')
        
    };

    render() { 
        return ( 
            <div className="container form-group">
                <h2>PHEWW!! YOU HAVE SCROLLED TOO FAR.</h2>
                <p style={{textAlign: 'center', marginBottom: '3em'}} className="long-copy">
                    Which means you might have something to tell us.<br/>
                    Fill in the boxes and magic of Computer Science will send the messages to our managers.
                </p>
                <form method="GET" className="mb-5" onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name', 'Enter Name')}
                    {this.renderInput('email', 'Email', 'Enter Email')}
                    {this.renderInput('number', 'Contact No', 'Enter Contact Number', 'number')}
                    {this.renderTextArea('experience','Tell us your experience')}
                    {this.renderLike('like' ,'Do you like our food?', this.state.data.like)}
                    <br />
                    <br />
                    {this.renderButton('Send It!!')}
                </form>
            </div>
         );
    };
}
 
export default opinionForm;