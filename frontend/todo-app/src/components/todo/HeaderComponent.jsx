
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class HeaderComponent extends Component {

    render (){

        const userLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log('userlogin:' + userLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark  ">
                    <div><a href="https://github.com/aliimran-pk/Java-Full-Stack-with-React--Spring-Boot" className="navbar-brand">GitHub</a> </div>
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

export default HeaderComponent;