import React, { Component } from 'react'
import axios from 'axios'
import ListCards from '../components/ListCards'
import CardsFilter from '../components/CardsFilter'
import './CardsPage.css';
import { trackPromise } from 'react-promise-tracker';


class CardsPage extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             cards: null,
             filteredCards: null,
             errorMsg: null,
             userName: localStorage.getItem("userName")
        }
    }
    
    componentDidMount() {
        trackPromise(
        axios.get('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English')
            .then(response => {
                // console.log(response.data.cards)
                this.setState({
                    cards: response.data.cards,
                    filteredCards: response.data.cards
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retreiving data'})
            }));
    }

    filterCards(filterData) {
        console.log('Tes', filterData);
        let cards = this.state.cards;
        let filteredCards = cards.filter(card => {
            let colorMatchCard = null;
            if (filterData.colors && filterData.colors.length) {
                filterData.colors.forEach(color => {
                    if (card.colors.includes(color.label)) {
                        colorMatchCard = card;

                        return;
                    }
                });
            }
            else {
                colorMatchCard = card;
            }

            let typeMathcCard = null
            if (filterData.types && filterData.types.length) {
                filterData.types.forEach(type => {
                    if (card.types.includes(type.label)) {
                        typeMathcCard = card;

                        return;
                    }
                });
            }
            else {
                typeMathcCard = card;
            }

            let nameMatchCard = null;
            if (filterData.search !== '') {
                const searchParam = filterData.search.toLowerCase();
                const cardName = card.name.toLowerCase();
                const cardText = card.text ? card.text.toLowerCase() : '';
                if (cardName.includes(searchParam) || cardText.includes(searchParam)) {
                    nameMatchCard = card;
                }
            }
            else {
                nameMatchCard = card;
            }

            if (colorMatchCard && typeMathcCard && nameMatchCard) {
                return colorMatchCard;
            }

        })

        filteredCards.sort(this.compareValues('name', filterData.sortBy.value));

        this.setState({
            filteredCards: filteredCards
        })
    }

    compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
          }
      
          const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
          const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }

    render() {
        const { errorMsg } = this.state
        const cards = this.state.filteredCards;
        return (
            <div className="cards-page">
                <div className="welcome-message">
                    <h1>
                        Hello, { this.state.userName }
                    </h1>
                </div>

                <CardsFilter onFilter={(filterData) => this.filterCards(filterData)} />

                {(cards || errorMsg) &&
                    <ListCards cards={cards} errorMsg={errorMsg} />
                }
            </div>
        )
    }
}

export default CardsPage
