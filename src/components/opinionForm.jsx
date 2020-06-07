import React from 'react';
import Joi from 'joi';
import Form from './form';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config.json'

class opinionForm extends Form {
    
    constructor(props) {
        super(props)
        
        //save initial state to clear inputs on success.
        this.baseState = this.state     
    }

    state = {
        data: { email: '', name: '', number: '', experience: '', like: false},
        loading: false,
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
    doSubmit = async () => {
        this.setState({ loading: true })
        try {
            const { data } = await axios({
                method: 'post',
                url: config.apiEndPoint + '/send_opinion',
                data: this.state.data
            })

            if(data.success) {
                toast.success(data.success)
                this.props.updateHeartCount()
                this.setState(this.baseState)
            }
        } catch(ex) {
            toast.error("UH`OH! Something went wrong. It's on us not on you")
        }
        this.setState({ loading: false })
    };

    render() { 
        return ( 
            <div className="container form-group " id="opinionForm">
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
                    {this.state.loading ?
                        this.renderLoadingButton('Sending...'):
                        this.renderButton('Send It!!')
                    }
                </form>
            </div>
         );
    };
}
 
export default opinionForm;