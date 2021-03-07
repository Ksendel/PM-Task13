import React from 'react'
import API from "./API";

import withUsers from "./enhancers/withUsers";
import TodoList from "./TodoList";
import UserSelector from "./User/UserSelector";
import AddTodoItem from "./Form/AddTodoItem";
import TodoSearch from "./Search/TodoSearach";

import './Todos.css'

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUserId: this.props.users[0]?.id,
            todos: [],
            filter: ''
        }

        this.updateTodos = this.updateTodos.bind(this)
        this.onTodoAdded = this.onTodoAdded.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }

    updateTodos = (id) => {
        API.getTodos(id)
            .then((todos) => this.setState({todos, currentUserId: id}))
    }

    componentDidMount() {
        if (this.state.currentUserId)
            this.updateTodos(this.state.currentUserId)
    }

    onTodoAdded(todo) {
        this.setState(state => ({
            todos: [...state.todos, todo]
        }))
    }

    onSearch(text) {
        console.log(this.state.todos.map(el => el.title).filter(res => res.includes(text)))
        this.setState({
            filter: text
        })
    }

    render() {
        const {users} = this.props
        const {currentUserId} = this.state

        const Dashboard = () => {
            const todos = this.state.todos.filter(todo => todo.title.includes(this.state.filter))

            if (users.length !== 0) {
                return <div className='TodoList'>
                    <TodoList filter={this.state.filter} todos={todos}/>
                </div>
            } else return null
        }
        return <div className='Todos'>
            <div className='todos-header'>
                <UserSelector users={users} onUserChanged={this.updateTodos}/>
                <AddTodoItem userId={currentUserId} onTodoAdded={this.onTodoAdded}/>
                <TodoSearch onSearch={this.onSearch}/>
            </div>
            <div className='content'>
            <Dashboard/>
            </div>
        </div>
    }
}

export default withUsers(Todos)
