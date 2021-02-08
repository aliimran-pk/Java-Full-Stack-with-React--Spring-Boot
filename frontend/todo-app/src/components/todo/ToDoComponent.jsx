import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class ToDoComponent extends Component {

    constructor(props){
        super(props)
        }

        render (){
            return (
                <>
                <h1>To Do!</h1>
                <div className="container">
                   Welcome {this.props.match.params.id}<p/>
                </div>
                </>
              );
        }
    }

    export default ToDoComponent;