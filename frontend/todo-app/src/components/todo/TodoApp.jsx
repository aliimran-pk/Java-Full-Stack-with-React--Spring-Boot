import { render } from '@testing-library/react';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './bootstrap.css';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';


class TodoApp extends Component {

    render (){
        return (
            <div>
                <Router>
                    <>
                        <HeaderComponent/>
                       <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <AuthenticatedRoute path="/welcome:name" component={WelcomeComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/todos" component={ListToDoComponent}></AuthenticatedRoute>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                            <Route component={ErrorComponent}></Route>
                       </Switch>
                       <FooterComponent/>
                    </>
               </Router>
            </div>
          );
    }
}

function ErrorComponent()
{
    return (
        <div className="toDo">
           Invalid URL
        </div>
      );

}
class WelcomeComponent extends Component {

    render (){
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
               Welcome {this.props.match.params.name}<p/>
               Manage your Todos  <Link to="/todos" >Click here</Link>
            </div>
            </>
          );
    }
}

class LogoutComponent extends Component {

    render (){
        return (
            <>
               <h1>You are logged out</h1>
               <div className="container"></div>
               Thnak you for using the Application
            </>
          );
    }
}

class HeaderComponent extends Component {

    render (){

        const userLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log('userlogin:' + userLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
                    <div><a href="www.google.com" className="navbar-brand">Google</a> </div>
                    <ul className="navbar-nav">
                        {userLoggedIn && <li><Link to="/welcome" className="navbar-link">Home&nbsp;</Link> </li>}
                        {userLoggedIn && <li><Link to="/todos" className="navbar-link">Todo</Link> </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLoggedIn &&  <li><Link to="/login" className="navbar-link">Login&nbsp;</Link> </li>}
                        {userLoggedIn &&  <li><Link to="/logout" className="navbar-link" onClick={AuthenticationService.logout} >Logout</Link> </li>}
                    </ul>
                </nav>
            </header>
          );
    }
}


class FooterComponent extends Component {

    render (){
        return (
            <div className="Footer bg-dark" >
            <span className="text-muted" >   All right reserved by Ali Imran</span><hr/>
              </div>
          );
    }
}


class ListToDoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: [
                    {id: 1, description: 'Learning React',done:false, targetDate: new Date()},
                    {id: 2, description: 'Learning AWS',done:true, targetDate: new Date()},
                    {id: 3, description: 'Learning Java',done:false, targetDate: new Date()},
                    {id: 4, description: 'Learning Spring',done:false, targetDate: new Date()}
                  ]
        }
    }

    render (){
        return (
            <div>
               <h1>List Todos</h1>
               <div className="container">
               <table className="table" >
                   <thead>
                       <tr>
                           <td>Description</td>
                           <td>Is Completed ?</td>
                           <td>Target Date</td>
                       </tr>
                   </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todoObj =>
                                <tr key={todoObj.id}>
                                    <td>{todoObj.description}</td>
                                    <td>{todoObj.done.toString()}</td>
                                    <td>{todoObj.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
                </div>
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

export default TodoApp