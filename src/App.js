import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/Forms/SignIn';
import Navbar from './components/Layouts/Navbar';
import RegisterForm from './components/Forms/RegisterForm';
import NewGist from './components/Forms/NewGist';
import Home from './components/Layouts/Home';
import NotFound from './components/Utilities/Others/NotFoundPage'
import GistDetails from './components/Layouts/GistDetails';




function App() {
  return (
   
    <Router>
      <Navbar />
      <Switch>
        <Route exact  path="/login" component={SignIn} />
        <Route exact  path="/register" component={RegisterForm} />
        <Route exact path="/gist/:id" component={GistDetails}/>
        <Route exact  path="/add-gist" component={NewGist} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
      
  );
}

export default App;
