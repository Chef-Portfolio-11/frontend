import React from 'react';
import Cube from './components/Cube';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
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
          <Route path='/login' component={Cube} />
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={NewUserForm} /> */}
          <PrivateRoute path='/protected' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
