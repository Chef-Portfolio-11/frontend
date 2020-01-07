import React from 'react';
import LoginRegistration from './components/LoginRegistration';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from './components/Navigation';
import NewChefForm from './components/NewChefForm';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          <Route path='/register' component={NewChefForm} />
          <Route exact path= '/' component= {LoginRegistration} />
            
        </Switch>
      </Router>
    </div>
  );
}

export default App;
