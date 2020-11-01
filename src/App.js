import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/cards'>
            <CardsPage />
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
