import React, {useState} from "react";
import debounce from 'lodash.debounce';

const TodoSearch = ({onSearch}) => {

    const handleChange = (event) => {
        debounce(() => {
            onSearch(event.target.value.trim())
        }, 1000)()
    }

    return <div className='Search'>
        <input type="text" placeholder='search...' onChange={handleChange}/>
        <button className='button-search'>Search</button>
    </div>
}
export default TodoSearch
