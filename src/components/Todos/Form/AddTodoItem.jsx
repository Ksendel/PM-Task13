import React, {useEffect, useRef, useState} from 'react'
import API from "../API";

const AddTodoItem = ({onTodoAdded, userId}) => {

    const [title, setTitle] = useState('')
    const inputRef = useRef()


    const onChangeTitle = (event) => setTitle(event.target.value)

    const onAddClick = () => {
        API.createTodo({userId, title})
            .then((todo) => onTodoAdded(todo))
        setTitle('')
        inputRef.current.focus()
    }

    return <div className='AddTodo'>
        <input ref={inputRef} value={title} placeholder='Type new todo here' onChange={onChangeTitle}/>
        <button className='button-add' onClick={onAddClick}>Add</button>
    </div>
}
export default AddTodoItem
