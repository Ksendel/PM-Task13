import React from 'react'

class AddCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }

        this.changeText = this.changeText.bind(this)
        this.addClick = this.addClick.bind(this)
    }

    changeText(event) {
        this.setState(() => ({
            text: event.target.value
        }))
    }

    addClick(){
        if (this.state.text.trim() !== '')
            this.props.onSubmit(this.state.text)
        console.log(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        const {changeText, addClick} = this
        const {text} = this.state

        return <div className='AddCard'>
            <textarea value={text} onChange={changeText}/>
            <button onClick={addClick} className='addNote'>Add note</button>
        </div>
    }
}

export default AddCard
