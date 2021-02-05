import { render } from '@testing-library/react';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './bootstrap.css';

class TodoApp extends Component {

    render (){
        return (
            <div className="toDo">
                <Router>
                    <>
                        <HeaderComponent/>
                       <Switch>
                            <Route path="/" exact component={LoginComponent}></Route>
                            <Route path="/login" component={LoginComponent}></Route>
                            <Route path="/welcome:name" component={WelcomeComponent}></Route>
                            <Route path="/todos" component={ListToDoComponent}></Route>
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
            <div className="toDo">
               Welcome {this.props.match.params.name}<p/>
               Manage your Todos  <Link to="/todos" >Click here</Link>
            </div>
          );
    }
}

class HeaderComponent extends Component {

    render (){
        return (
            <div className="toDo">
              Header <hr/>
              </div>
          );
    }
}


class FooterComponent extends Component {

    render (){
        return (
            <div className="toDo">
              Footer <hr/>
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
            <div className="toDo">
               <h1>List Todos</h1>
               <table>
                   <thead>
                       <tr>
                           <td>Id</td>
                           <td>Description</td>
                           <td>Target Date</td>
                           <td>Completed</td>
                       </tr>
                   </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todoObj =>
                                <tr key={todoObj.id}>
                                    <td>{todoObj.id}</td>
                                    <td>{todoObj.description}</td>
                                    <td>{todoObj.done.toString()}</td>
                                    <td>{todoObj.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>

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
               {this.state.loginSuccess && <div>Login Success</div>}
               {this.state.loginFailed && <div>Login Failed</div>}

            </div>
          );
    }

}

export default TodoApp