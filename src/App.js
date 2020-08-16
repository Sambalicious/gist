import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/Forms/SignIn';
import SignInHeader from './components/Forms/SignInHeader';
import Navbar from './components/Layouts/Navbar';
import RegisterForm from './components/Forms/RegisterForm';
import NewGist from './components/Forms/NewGist';





function App() {
  return (
   
    <Router>
      <Navbar />
      <Switch>
        <Route exact  path="/login" component={SignIn} />
        <Route exact  path="/register" component={RegisterForm} />
        <Route exact  path="/add-gist" component={NewGist} />
      </Switch>
    </Router>
      
  );
}

export default App;
