import React, { Component } from 'react';
import axios from 'axios'
import Select from 'react-select';
import './CardsFilter.css';

class CardsFilter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            colorsOptions: [
                {
                    value: 'white',
                    label: 'White'
                },
                {
                    value: 'blue',
                    label: 'Blue'
                },
                {
                    value: 'black',
                    label: 'Black'
                },
                {
                    value: 'red',
                    label: 'Red'
                },
                {
                    value: 'green',
                    label: 'Green'
                }
            ],
            search: '',
            selectedColors: [],
            typesOptions: [],
            selectedTypes: [],
            sortByOptions: [
                {
                    value: 'asc',
                    label: 'Ascending'
                },
                {
                    value: 'desc',
                    label: 'Descending'
                }
            ],
            selectedSort: 'asc'
        }
    }

    componentDidMount() {
        axios.get('https://api.magicthegathering.io/v1/types')
            .then(response => {
                const types = response.data.types.reduce((acc, type) => {
                    return [
                        ...acc,
                        {
                            value: type,
                            label: type
                        }
                    ];
                  }, []);

                this.setState({
                    typesOptions: types
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onFilter = () => {
        const filterData = {
            search: this.state.search,
            colors: this.state.selectedColors,
            types: this.state.selectedTypes,
            sortBy: this.state.selectedSort
        }

        this.props.onFilter(filterData);
    }

    handleColorChange = (event) => {
        this.setState({
            selectedColors: event
        })
    }

    handleTypeChange = (event) => {
        this.setState({
            selectedTypes: event
        })
    }

    handleSortByChange = (event) => {
        this.setState({
            selectedSort: event
        })
    }

    render() {
        return (
            <div className="cards-filter">
                <div className="input">
                    <input type="text" name="name" placeholder="Search by name or text" value={this.state.search} onChange={this.handleInputChange} />
                </div>
            <div className="filter">
                <div className="colors">
                    <Select
                        closeMenuOnSelect={false}
                        placeholder="COLORS"
                        isMulti
                        options={this.state.colorsOptions}
                        onChange={this.handleColorChange} />
                </div>

                    <div className="types">
                        <Select
                            closeMenuOnSelect={false}
                            placeholder="TYPES"
                            isMulti
                            options={this.state.typesOptions}
                            onChange={this.handleTypeChange} />
                    </div>

                <div className="sort-by">
                    <Select
                        closeMenuOnSelect={true}
                        placeholder="order"
                        options={this.state.sortByOptions}
                        onChange={this.handleSortByChange} />
                </div>
            </div>

                <div>
                    <button value="Filter" onClick={this.onFilter}>FILTER</button>
                </div>
            </div>
        )
    }
}

export default CardsFilter
