import React from 'react'
import AddComment from "../Comment/AddComment";
import Comment from "../Comment/Comment";
import date from 'date-and-time';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            text: props.text,
            vote: props.vote,
            comments: props.comments,
            addCardEnabled: true,
            edit: true,
        }

        this.toggleOn = this.toggleOn.bind(this)
        this.edit = this.edit.bind(this)

        this.onTextUpdate = this.onTextUpdate.bind(this)
        this.onSaveTextChanges = this.onSaveTextChanges.bind(this)
        this.onClickDeleteCard = this.onClickDeleteCard.bind(this)
        this.addComment = this.addComment.bind(this)
        this.onCommentDelete = this.onCommentDelete.bind(this)
        this.onClickLike = this.onClickLike.bind(this)
        this.onClickDislike = this.onClickDislike.bind(this)
    }

    toggleOn() {
        this.setState(state => ({
            addCardEnabled: !state.addCardEnabled
        }))
    }

    edit() {
        this.setState(state => ({
            edit: !state.edit
        }))
    }

    addComment(message) {
        const now = new Date()
        const timeNow = date.format(now, 'YYYY/MM/DD HH:mm:ss')
        if (message.trim() !== '') {
            this.setState((state) => ({
                comments: [...state.comments, {
                    id: performance.now(),
                    message,
                    time: timeNow
                }],
                addCardEnabled: !state.addCardEnabled,
            }))
        }
        console.log(this.state.comments)
    }

    onTextUpdate(event) {
        this.setState(() => ({
            text: event.target.value
        }))
    }

    onSaveTextChanges() {
        this.props.onUpdate(this.state)
        this.edit()
    }

    onClickDeleteCard() {
        this.props.onDelete(this.state)
    }

    onClickLike() {
        this.setState((state) => ({
            vote: state.vote + 1
        }))
        this.props.onUpdate({...this.state, vote: this.state.vote + 1})
    }

    onClickDislike() {
        this.setState((state) => ({
            vote: state.vote - 1
        }))
        this.props.onUpdate({...this.state, vote: this.state.vote - 1})
    }

    onCommentDelete(id) {
        this.setState((state) => ({
            comments: state.comments.filter(c => c.id !== id)
        }))
    }

    render() {
        const {onTextUpdate, onSaveTextChanges, onClickDeleteCard, addComment, toggleOn, onClickLike, onClickDislike} = this

        return (
            <div className='Card'>
                <div className='card_wrapper'>

                    {this.state.edit ?
                        <div className='options'>
                            <img src="/edit.png" alt="" className='icon' onClick={this.edit}/>
                            <img src="/trash.png" alt="" className="icon" onClick={onClickDeleteCard}/>
                        </div> :
                        <div className='edit'>
                            <textarea value={this.state.text} onChange={onTextUpdate}/>
                            <button onClick={onSaveTextChanges} className='save'>save</button>
                        </div>
                    }
                    <p className='text'>{this.state.text}</p>

                    <div className='vote-area'>
                        <div className='vote'>
                            <p>{this.state.vote}</p>
                            <img src="/like.png" alt="" className='icon' onClick={onClickLike}/>
                            <img src="/dislike.png" alt="" className='icon' onClick={onClickDislike}/>
                        </div>
                        {this.state.addCardEnabled ?
                            <div className='comments' onClick={toggleOn}>
                                <p>{this.state.comments.length}</p>
                                <img src="/comments.png" alt="" className='icon'/>
                            </div> :
                            <div className='comments-wrapper'>
                                <AddComment onSubmit={addComment}/>{
                                this.state.comments.map(comment =>
                                    <Comment key={comment.id} {...comment} onCommentDelete={this.onCommentDelete}/>
                                )
                            }
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
