import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from './components/Navigation';
import './App.css'
import NewChefForm from './components/NewChefForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          {/* Routes */}
          <Route path='/register' component={NewChefForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
