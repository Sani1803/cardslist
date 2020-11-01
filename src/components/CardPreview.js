import React, { Component } from 'react';
import './CardPreview.css';

export class CardPreview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    convertToString(array) {
        return array.join(', ');
    }

    getImgUrl(imageUrl) {
        if (imageUrl) {
            return imageUrl;
        }

        return 'https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=126210&type=card';
    }

    render() {
        const {card} = this.props;
        return (
            <div className="card-preview width80 mobile-section " key={card.id}>
                <img className="image" src={this.getImgUrl(card.imageUrl)} alt="" />
                <div className="card-text width80text">
                    <div className="name">
                        Name: {card.name}
                    </div>
                    <div className="set-name">
                        <b>Set Name:</b> {card.setName}
                    </div>
                    <div className="type">
                        <b>Type:</b> {this.convertToString(card.types)}
                    </div>
                    <div className="color">
                        <b>Colors:</b> {this.convertToString(card.colors)}
                    </div>
                    <div className="color">
                        <b>Text:</b> {card.text}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardPreview;
