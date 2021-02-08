import { render } from '@testing-library/react';
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './bootstrap.css';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent';
import ListToDoComponent from './ListToDoComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import LogoutComponent from './LogoutComponent';
import ToDoComponent from './ToDoComponent';

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
                                    <AuthenticatedRoute path="/todos/:id" component={ToDoComponent}></AuthenticatedRoute>
                                    <AuthenticatedRoute path="/todos" component={ListToDoComponent}></AuthenticatedRoute>
                                     <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
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



export default TodoApp