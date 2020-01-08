import React from 'react';
<<<<<<< HEAD
import LoginRegistration from './components/LoginRegistration';
import CreateRecipe from "./components/CreateRecipe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
=======
import Cube from './components/Cube';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
>>>>>>> 7f4a11abe47389bf44e77bc64327027015c69ed5
import Navigation from './components/Navigation';
import NewUserForm from './components/NewUserForm';
import RecipeList from './components/RecipeList'
import './App.css'
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          <Route exact path='/' component={RecipeList} />
          <Route path='/register' component={NewUserForm} />
<<<<<<< HEAD
          <Route exact path= '/' component= {LoginRegistration} />

          <Route path="/create-recipe" render={() => {
            return <CreateRecipe />
          }}/>
            
=======
          <Route path='/login' component={Cube} />
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={NewUserForm} /> */}
          <PrivateRoute path='/protected' component={Profile} />
>>>>>>> 7f4a11abe47389bf44e77bc64327027015c69ed5
        </Switch>
      </Router>
    </div>
  );
}

export default App;
