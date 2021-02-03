import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class TodoApp extends Component {

    render (){
        return (
            <div className="toDo">
               <LoginComponent/>
            </div>
          );
    }
}

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
        console.log(this.state)
        this.setState(
            {
                [event.target.name]:event.target.value
            });
    }

    loginClicked()
    {
        if (this.state.username === 'user1' && this.state.password ==='pwd'){
            this.setState({loginSuccess: true,loginFailed: false})

        }
        else
        {
            this.setState({loginSuccess: false,loginFailed: true})
        }

    }

    render (){
        return (
            <div className="toDo">
               User Name: <input type="text" name = "username" value={this.state.username}  onChange={this.handleChange}></input>
               Password: <input type="password" name = "password" value={this.state.password} onChange={this.handleChange} ></input>
               <button onClick={this.loginClicked} >Login</button>
               <ShowSuccessMessage loginSuccess={this.state.loginSuccess} />
               <ShowFailedessage loginFailed={this.state.loginFailed} />
            </div>
          );
    }

}

function  ShowSuccessMessage(props){

    if (props.loginSuccess){
         return <div>Login Success</div>
    }
    else {
        return null
    }
}

function  ShowFailedessage(props){

    if (props.loginFailed){
         return <div>Login Failed</div>
    }
    else {
        return null
    }
}

export default TodoApp