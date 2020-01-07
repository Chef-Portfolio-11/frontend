import React from 'react';
import LoginRegistration from './components/LoginRegistration';
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
<<<<<<< HEAD
          <Route path='/register' component={NewChefForm} />
=======
          <Route exact path= '/' component= {LoginRegistration} />
            
>>>>>>> 4aeaf5a30a54e52eed0fc60ad38267b9b0e93325
        </Switch>
      </Router>
    </div>
  );
}

export default App;
