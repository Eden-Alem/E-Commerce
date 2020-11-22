import React from 'react';
import './react.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {EmailValue: '',
        PasswordValue:'',
        CPasswordValue:''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCPassword = this.handleChangeCPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({EmailValue:event.target.EmailValue});
    }
    handleChangePassword(event) {
        this.setState({PasswordValue:event.target.PasswordValue});
    }
    handleChangeCPassword(event) {
        this.setState({CPasswordValue:event.target.CPasswordValue});
    }

    handleSubmit(event) {
        alert('You have successfully signed in');
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
                <h2 style={{marginBottom: "0"}}>Register</h2>
                <p style={{marginTop: "0"}}>Already have an account? <a href="index.html" style={{fontSize: "85%"}}><Link to="/signin">Sign in</Link></a></p>
                <label>
                    Email
                    <input type="email" placeholder="Enter your Email" EmailValue={this.state.EmailValue} onChange={this.handleChangeEmail} required/>
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Enter your password" PasswordValue={this.state.PasswordValue} onChange={this.handleChangePassword} required/>
                </label>
                <label>
                    Confirm Password
                    <input type="password" placeholder="Confirm password" CPasswordValue={this.state.CPasswordValue} onChange={this.handleChangeCPassword} required/>
                </label>
                <input id="sign" type="submit" value="Sign in"/>
            </form>
            <div className="main-footer"> 
                    <span>&copy; Eden Alem 2020</span>
                </div>
            </div>
        );
    }

    
}
export default Register;