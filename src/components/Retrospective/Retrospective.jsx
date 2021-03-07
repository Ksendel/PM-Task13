import React from 'react'
import CardsColumn from "./CardsColumn/CardsColumn";
import './Retrospective.css'

class Retrospective extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const green = {
            backgroundColor: '#b7ffa6'
        }
        const red = {
            backgroundColor: '#ff8080'
        }

        const blue = {
            backgroundColor: '#7fddff'
        }
        return <div className='Retrospective'>
            <div className='retro-wrapper'>
                <header><h1>Retrospective task</h1></header>
                <div className='columns'>
                    <CardsColumn title={'Good things'} colorCard={green}/>
                    <CardsColumn title={'Bad things'} colorCard={red}/>
                    <CardsColumn title={'Actions items'} colorCard={blue}/>
                </div>
            </div>
        </div>
    }
}

export default Retrospective
