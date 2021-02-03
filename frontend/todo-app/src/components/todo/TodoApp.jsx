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
            username: 'Enter user name',
            passwrod: ''
        }

        this.handeUsernameChange = this.handeUsernameChange.bind(this)
    }

    handeUsernameChange(event){
        this.setState({username:event.target.value});
        console.log(event.target.value)
    }

    handepasswordChange(event){
        this.setState({password:event.target.value});
    }
    render (){
        return (
            <div className="toDo">
               User Name: <input type="text" name = "username" value={this.state.username}  onChange={this.handeUsernameChange}></input>
               Password: <input type="password" name = "password" value={this.state.passwrod} onChange={this.handePasswordChange} ></input>
               <button>Login</button>
            </div>
          );
    }
}

export default TodoApp