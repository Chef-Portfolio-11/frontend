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
import ChefDashboard from './components/ChefDashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  if (isLoggedIn === undefined) setIsLoggedIn(true);
  const [myChefId, setmyChefId] = useState();
  if (myChefId === undefined) setmyChefId(1);
  const userHasChanged = function () {
    setmyChefId(localStorage.getItem('userId'));
    if (myChefId === undefined) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }
  return (
    <div className="App">
      <Router>
        <Navigation isLoggedIn={isLoggedIn} userHasChanged={userHasChanged}/>
        <Switch>
          {/* Routes */}
          {isLoggedIn ? <Route path='/' render={(props) => <ChefDashboard {...props} chefid={myChefId} />} /> : <Route exact path='/' component={RecipeList} />}

          <Route path='/register' component={NewUserForm} />
          <Route path='/Profiles' component={Profiles} />
          <Route path='/MyRecipesOld' component={RecipesByChef} />
          <Route path='/CubeTest' component={Cube} />

          <Route path='/profiles' component={Profiles} />
          <Route path="/create-recipe" render={() => {
            return <CreateRecipe />
          }} />
          <Route path='/login' component={Cube} />
          {/* <Route path='/login' component={Login} />
          <Route path='/register' component={NewUserForm} /> */}
          <PrivateRoute path='/protected' component={Profiles} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
