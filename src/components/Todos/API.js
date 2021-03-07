class API {
    location = "https://jsonplaceholder.typicode.com"

    async request({uri, body, method = 'GET', params}) {
        return await fetch(`${this.location}/${uri}?` + params, {
            method: method,
            body: body && JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) return response.json()
            else throw new Error(response.statusText)
        })
    }

    withParams = (params) => new URLSearchParams(params).toString()

    async getTodos(userId) {
        return await this.request({
            uri: "todos",
            params: this.withParams({userId})
        })
    }

    async createTodo({userId, title}) {
        return await this.request({
            uri: 'todos',
            body: {
                userId,
                title,
                completed: false,
            },
            method: 'POST'
        })
    }

    async completeTodo(id) {
        return await this.request({
            uri: `todos/${id}`,
            body: {
                completed: true
            },
            method: 'PATCH'
        })
    }

    async getUsers() {
        return await this.request({
            uri: 'users'
        })
    }
}

export default new API()
