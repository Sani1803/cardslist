import React, { Component } from 'react'
import CardPreview from './CardPreview';
import './ListCards.css';

class ListCards extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    render() {
        const {cards, errorMsg} = this.props;
        return (
            <div className="list-cards">
                {
                    cards.length ?
                    cards.map(card => <CardPreview key={card.id} card={card} /> ) :
                    null 
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default ListCards
