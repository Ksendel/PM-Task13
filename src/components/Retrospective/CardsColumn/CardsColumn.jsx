import React from 'react'
import AddCard from "../Card/AddCard";
import Card from "../Card/Card";

class CardsColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            addCardEnabled: false,
            counter: 0
        }

        this.toggleOn = this.toggleOn.bind(this)

        this.createCard = this.createCard.bind(this)
        this.onCardUpdate = this.onCardUpdate.bind(this)
        this.onCardDelete = this.onCardDelete.bind(this)
    }

    toggleOn(e) {
        this.setState(state => ({
            addCardEnabled: !state.addCardEnabled
        }))
        e.target.classList.add('hide')
    }

    createCard(text) {
        this.setState((state) => ({
            cards: [...state.cards, {
                id: performance.now(),
                text,
                vote: 0,
                comments: [],
            }],
            addCardEnabled: !state.addCardEnabled,
            counter: state.counter + 1
        }))
    }

    onCardUpdate(card) {
        this.setState((state) => ({
            cards: [...state.cards.filter(e => e.id !== card.id), card]
        }))
    }

    onCardDelete(card) {
        this.setState((state) => ({
            cards: state.cards.filter(e => e.id !== card.id),
            counter: state.counter - 1
        }))
    }

    render() {
        const {createCard, onCardUpdate, onCardDelete, toggleOn} = this
        const {cards} = this.state

        return <div className='CardsColumn'>
            <div className='title'>
                <h2>{this.props.title}</h2>
                <h4 style={this.props.colorCard}>{this.state.counter}</h4>
            </div>
            {
                this.state.addCardEnabled ?
                    <AddCard onSubmit={createCard}/> :
                    <button className='add-card' onClick={toggleOn}>+ Write note</button>
            }
            <div>{
                cards
                    .sort((a, b) => b.vote - a.vote)
                    .map(elem => <Card key={elem.id} onUpdate={onCardUpdate} onDelete={onCardDelete} {...elem}/> )
            }</div>
        </div>
    }
}

export default CardsColumn
