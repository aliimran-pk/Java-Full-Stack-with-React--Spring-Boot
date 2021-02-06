
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            loginSuccess: false,
            loginFailed: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event){
        //console.log(this.state)
        this.setState(
            {
                [event.target.name]:event.target.value
            });
    }

    loginClicked()
    {
        if (this.state.username === 'user1' && this.state.password ==='pwd'){
            //this.setState({loginSuccess: true,loginFailed: false})
            this.props.history.push(`/welcome ${this.state.username}`)
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)

        }
        else
        {
            this.setState({loginSuccess: false,loginFailed: true})
        }

    }

    render (){
        return (
            <>
            <h1>Login</h1>
            <div className="container">
               User Name: <input type="text" name = "username" value={this.state.username}  onChange={this.handleChange}></input>
               Password: <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} ></input>
               <button onClick={this.loginClicked} className="btn btn-s" >Login</button>
               {this.state.loginSuccess && <div>Login Success</div>}
               {this.state.loginFailed && <div className="alert alert-warning">Login Failed</div>}

            </div>
            </>
          );
    }

}

export default LoginComponent