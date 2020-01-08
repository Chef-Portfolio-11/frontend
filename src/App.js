import React from 'react';
import LoginRegistration from './components/LoginRegistration';
import CreateRecipe from "./components/CreateRecipe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from './components/Navigation';
import NewUserForm from './components/NewUserForm';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          <Route path='/register' component={NewUserForm} />
          <Route exact path= '/' component= {LoginRegistration} />

          <Route path="/create-recipe" render={() => {
            return <CreateRecipe />
          }}/>
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
