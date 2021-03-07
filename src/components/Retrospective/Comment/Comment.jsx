import React from 'react'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this)
    }

    showTime(time) {
        return time
    }

    onDelete() {
        this.props.onCommentDelete(this.props.id)
    }

    render() {
        return (
            <div className="Comment">
                <p>{this.props.message}</p>
                <span>{this.showTime(this.props.time)}</span>
                <img src="/trash.png" alt="" className="icon" onClick={this.onDelete}/>
            </div>
        );
    }
}

export default Comment
