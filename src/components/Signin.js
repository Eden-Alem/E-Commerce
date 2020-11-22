import React from 'react';
import { Link } from "react-router-dom";


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {EmailValue: '',
        PasswordValue:''};

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({EmailValue:event.target.EmailValue});
    }
    handleChangePassword(event) {
        this.setState({PasswordValue:event.target.PasswordValue});
    }

    handleSubmit(event) {
        alert('You have successfully logged in!');
        event.preventDefault();
        event.target.reset();
    }   

    render() {
        return (
            <form className="signed" onSubmit={this.handleSubmit}>
                <h2 style={{marginBottom: "0"}}>Sign in</h2>
                <p style={{marginTop: "0"}}>Don't have an account? <a href="index.html" style={{fontSize: "85%"}}><Link to="/register">Register</Link></a></p>
                <label>
                    Email
                    <input type="email" placeholder="Enter your Email" EmailValue={this.state.EmailValue} onChange={this.handleChangeEmail} />
                </label>
                <label>
                    Password
                    <input type="password" placeholder="Enter your password" PasswordValue={this.state.PasswordValue} onChange={this.handleChangePassword} />
                </label>
                <a href="index.html" style={{textAlign: "right", marginBottom: "4%", fontSize: "85%"}}><Link to="/forgotpassword">Forgot your password?</Link></a>
                <input id="sign" type="submit" value="Sign in"/>
            </form>
        );
    }

    
}
export default Signin;