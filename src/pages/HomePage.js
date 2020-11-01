import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './HomePage.css'

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        //   username: localStorage.getItem("userName") || '',
            username: '',
            nameError: '',
            nameError2: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }

     handleSubmit(event, props) {
        event.preventDefault();

        this.setState({
            nameError: "",
            nameError2: ""
        })

        if ((this.state.username).length > 2 && /^[A-Z]/.test( this.state.username )) {
           localStorage.setItem("userName", this.state.username);
           this.props.history.push("/cards");
        } 
        else if (!/^[A-Z]/.test( this.state.username )) {
            this.setState({
                nameError: "!!! First letter should be UPPERCASE !!!"
            })
        }

        if (this.state.username.length <= 2) {
            this.setState({
                nameError2: "!!! Min 3 characters !!!"
            })
        }
     };
    
     handleUsernameChange = (event) => {
        this.setState({
           username: event.target.value
     })
    } 

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                  
                  <div style={{ color: "red", fontSize: 20 }}>{this.state.nameError}</div>
                  <div style={{ color: "red", fontSize: 20 }}>{this.state.nameError2}</div>
                    
                  <div>
                        <label className="user-name">Username:</label>
                        <input
                        className="todo-input"
                        type="text"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                        // pattern=".{3,}" 
                        // required title="min 3 characters"
                        />
                    </div>
                
                        <button type="submit">Submit</button>
                </form>
        )
    }
}

export default withRouter(HomePage);
