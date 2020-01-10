import React, { useState } from 'react';
import CreateRecipe from "./components/CreateRecipe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Cube from './components/Cube';
import Navigation from './components/Navigation';
import NewUserForm from './components/NewUserForm';
import RecipesByChef from './components/RecipesByChef';
import RecipeList from './components/RecipeList'
import './App.css'
import PrivateRoute from './components/PrivateRoute';
import Profiles from './components/Profiles';
import Login from './components/Login'
import RecipeDisplay from "./components/RecipeDisplay";
import EditRecipe from './components/EditRecipe';
import Recipe from './components/Recipe'
import ChefDashboard from './components/ChefDashboard';
import ChefProfile from "./components/ChefProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          {/* HOME */}
          <Route exact path='/' component={RecipeList} />
          {/* LOGIN/REGISTER */}
          <Route path='/login' component={Cube} />
          {/* LOGGED IN LANDING PAGE */}
          <PrivateRoute path='/protected' component={ChefDashboard} />

          <Route path="/profile/:id" render={(props) => {
            return <ChefProfile {...props}/>
          }}/>
          {/* CREATE RECIPE */}
          <Route path="/create-recipe" render={() => {
            return <CreateRecipe />
          }} />
          {/* EDIT RECIPE */}
          <Route path='/edit-recipe' render={props => {return <EditRecipe {...props} />}} />
          {/* SHOWS USER RECIPES BY USER_ID */}
          <Route path='/MyRecipes' render={(props) => <RecipesByChef {...props} chefid={2} />}
          />
          {/* A LIST OF CHEF PROFILES */}
          <Route path='/profiles' component={Profiles} />
          
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={NewUserForm} /> */}
          <Route path="/recipe/:id" render={(props) => {
            return <RecipeDisplay {...props} />
          }} />
          <PrivateRoute path='/protected' component={Profiles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
