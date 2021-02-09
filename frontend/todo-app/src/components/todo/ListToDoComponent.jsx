
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import TodoDataService from '../../api/todo/TodoDataService.js';
import moment from 'moment'

class ListToDoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos: [],
            message: null
        }

        this.deleteToDoClicked  = this.deleteToDoClicked.bind(this);
        this.refreshTodos       = this.refreshTodos.bind(this);
        this.updateToDoClicked  = this.updateToDoClicked.bind(this);
        this.addTodoClicked     = this.addTodoClicked.bind(this)
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    deleteToDoClicked(id)
    {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.deleteToDo(username,id)
        .then(
            response => {
                this.setState({ message: `Delete of todo ${id} Successful` })
                this.refreshTodos()
             }
        )
    }

    updateToDoClicked(id)
    {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ todos: response.data })
                }
            )
    }

    render (){
        return (
            <div>
               <h1>List Todos</h1>
               {this.state.message && <div className="alert alert-success" >{this.state.message}</div>}
               <div className="container">
               <table className="table" >
                   <thead>
                       <tr>
                           <td>Description</td>
                           <td>Is Completed ?</td>
                           <td>Target Date</td>
                           <td>Update</td>
                           <td>Delete</td>
                       </tr>
                   </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todoObj =>
                                <tr key={todoObj.id}>
                                    <td>{todoObj.description}</td>
                                    <td>{todoObj.done.toString()}</td>
                                    <td>{moment(todoObj.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateToDoClicked(todoObj.id)}>Update</button>    </td>
                                    <td><button className="btn btn-warning" onClick={() => this.deleteToDoClicked(todoObj.id)}>Delete</button>    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
                <div>
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
          );
    }
}

export default ListToDoComponent