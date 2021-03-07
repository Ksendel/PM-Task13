import React from 'react'
import API from "../API";

const withTodoItem = (Component) => {
    class WithTodoItem extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                completed: this.props.completed,
            }

            this.onDone = this.onDone.bind(this)
        }

        onDone() {
            if (this.props.completed === false)
                API.completeTodo(this.props.id)
                    .then((response) => {
                        this.setState({completed: response.completed})
                        console.log('Completed', response)
                    })
        }

        render() {
            return <Component onDone={this.onDone} {...this.props}  completed={this.state.completed} />
        }
    }
    // return <Component onDone={this.onDone} {...this.props} />
    return WithTodoItem
}

export default withTodoItem
