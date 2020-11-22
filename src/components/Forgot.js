import React from 'react';
import './react.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";


class Forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {EmailValue: ''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({EmailValue:event.target.EmailValue});
    }

    handleSubmit(event) {
        alert('Email sent!');
        event.preventDefault();
        event.target.reset();
    }   

    render() {
        return (
            <div className="wrapper">
                <header className="main-header">
                    <div className="container">
                        <p><a href="index.html"><Link to="/" style={{color: "black"}}><FontAwesomeIcon icon="arrow-left" />&nbsp;Go back</Link></a></p>
                    </div>
                </header>
            <form className="signed" onSubmit={this.handleSubmit}>
                <h2 style={{marginBottom: "0"}}>Recover your password</h2>
                <p style={{marginTop: "0"}}>Enter your account's email address and we will send you a password reset link.</p>
                <label>
                    Email
                    <input type="email" placeholder="Enter your Email" EmailValue={this.state.EmailValue} onChange={this.handleChangeEmail} />
                </label>
                <input id="sign" type="submit" value="Send password reset email"/>
            </form>
            <div className="main-footer"> 
                    <span>&copy; Eden Alem 2020</span>
                </div>
            </div>
        );
    }

    
}
export default Forgot;