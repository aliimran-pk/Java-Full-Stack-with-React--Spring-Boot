
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

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

export default ListToDoComponent