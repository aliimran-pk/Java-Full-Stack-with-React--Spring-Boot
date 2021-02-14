
import axios from 'axios';
import { API_URL,JPA_API_URL } from '../../Constants'

class TodoDataService
{

    retrieveAllTodos(name){
        let url = `${JPA_API_URL}/users/${name}/todos`
        console.log(url)
        return axios.get(url)
    }

    deleteToDo(name,id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    retrieveTodo(name, id) {
        let url = `${JPA_API_URL}/users/${name}/todos/${id}`
        console.log(url)
        return axios.get(url);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()