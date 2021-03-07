import React, { useState, useEffect }  from "react"

import withTodoItem from "../enhancers/withTodoItem";

const TodoItem = ({ onDone, id, title, completed, filter }) => {

    function onDoneClick() {
        onDone()
    }

    function withSearchMarker(text) {
        console.log(JSON.stringify({text, filter}))
        if(text && filter !== ''){
            return {__html:  text.replace(filter, `<strong>${filter}</strong>`)};
        } else return {__html:  text};
    }
    return <div className='TodoItems'>
        <div className='item'>
            <p>{id}</p>
            {/*{completed ? <p className='completed'>${title}</p> : <p>{title}</p>}*/}
            {<p className={completed && 'completed'} dangerouslySetInnerHTML={withSearchMarker(title)}/> }
            <button onClick={onDoneClick}>✖</button>
        </div>
    </div>
}
export default withTodoItem(TodoItem)
