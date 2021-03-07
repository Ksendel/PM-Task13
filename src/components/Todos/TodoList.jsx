import React, {useEffect} from 'react'
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({todos, filter}) => {


    useEffect(() => {
        console.log("DataList \n" + JSON.stringify(todos[0]))

    })

    return <div className='TodoList'>{
        todos.map((data) =>
            <TodoItem filter={filter} key={data.id} id={data.id} title={data.title} completed={data.completed}/>
        )
    }</div>
}

export default TodoList
