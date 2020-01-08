import React from 'react';
import LoginRegistration from './components/LoginRegistration';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Navigation from './components/Navigation';
import NewUserForm from './components/NewUserForm';
import RecipeCard from './components/RecipeCard';
import Routes from "./Routes";

// import recipeData from '../data/recipes.json';

import RecipeList from './components/RecipeList'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          <Route exact path='/' component={RecipeList} />
          <Route path='/register' component={NewUserForm} />
          {/* <Route path= '/login' component= {LoginRegistration} /> */}
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
