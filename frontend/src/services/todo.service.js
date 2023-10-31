import axios from 'axios'

export default class TodoService {
    static async getAll() {
        return axios.get('/todos')
    }

    static async addTodo(data) {
        return axios.post('/todos', data)
    }

    static async getTodo(id) {
        return axios.get('/todos/'+id)
    }

    static async updateTodo(id, data) {
        return axios.put('/todos/'+id, data)
    }

    static async deleteTodo(id) {
        return axios.delete('/todos/'+id)
    }
}