import axios from 'axios'

export default class TodoService {
    static async getAll() {
        return axios.get('/todos')
    }

    static async addTodo(data) {
        return axios.post('/todos', data)
    }
}