import React, { useState } from 'react';
import CreateRecipe from "./components/CreateRecipe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Cube from './components/Cube';
import Navigation from './components/Navigation';
import RecipesByChef from './components/RecipesByChef';
import RecipeList from './components/RecipeList'
import './App.css'
import PrivateRoute from './components/PrivateRoute';
import Profiles from './components/Profiles';
<<<<<<< HEAD
import Profile from './components/Profile'
import Login from './components/Login'
=======
import EditRecipe from './components/EditRecipe';
import Recipe from './components/Recipe'
import ChefDashboard from './components/ChefDashboard';
import { connect } from 'react-redux'
>>>>>>> 3f9e762c250bef59ba2787b1304e4e54890fd27c


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
          {/* CLOSER LOOK AT RECIPE */}
          <Route path='/recipe/:id' render={(props => {return <Recipe {...props} id={props.recipeData.id} />})} />
          {/* CREATE RECIPE */}
          <Route path="/create-recipe/:id" render={() => {
            return <CreateRecipe />
          }} />
          {/* EDIT RECIPE */}
          <Route path='/edit-recipe/:id' render={props => {return <EditRecipe {...props} />}} />
          {/* SHOWS USER RECIPES BY USER_ID */}
          <Route path='/MyRecipes' render={(props) => <RecipesByChef {...props} chefid={2} />}
          />
          {/* A LIST OF CHEF PROFILES */}
          <Route path='/profiles' component={Profiles} />
          
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={NewUserForm} /> */}
        </Switch>
      </Router>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    isFetching: state.isFetching,
    isPosting: state.isPosting,
    isLoggedIn: state.isLoggedIn,
    isEditing: state.isEditing,
    isDeleting: state.isDeleting,
    error: state.error,
    inputValues: {
        id: state.id,
        full_name: state.full_name,
        email: state.email,
        username: state.username,
        password: state.password,
        business_phone: state.business_phone,
        business_email: state.business_email,
        user_Id: state.userId
    },
    recipeData: state.recipeData,
  }
}

export default connect(
  mapStatetoProps
)(App)