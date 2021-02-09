import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        //this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage: ''
        }
        //this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

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

    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (error.message)
            errorMessage += error.message
        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ welcomeMessage: errorMessage })
    }
}

export default WelcomeComponent