import React from 'react'

class AddComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }

        this.changeText = this.changeText.bind(this)
        this.addClick = this.addClick.bind(this)
        this.onKeyPress = this.onKeyPress.bind(this)
    }

    changeText(event) {
        this.setState(() => ({
            message: event.target.value
        }))
    }

    addClick(){
        if (this.state.message.trim() !== '')
            this.props.onSubmit(this.state.message)

        this.setState({
            message: ''
        })
    }

    onKeyPress(e) {
        if (e.charCode === 13) {
            this.addClick()
        }
    }

    render() {
        const {changeText, addClick, onKeyPress} = this
        const {message} = this.state

        return <div className='AddComment'>
            <button onClick={addClick} className='addComment'>✓</button>
            <textarea value={message} onChange={changeText} placeholder={"enter a comment"} onKeyPress={onKeyPress}/>
        </div>
    }
}

export default AddComment
