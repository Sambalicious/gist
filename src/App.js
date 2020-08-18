import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import RegisterForm from './components/Forms/RegisterForm';
import NewGist from './components/Forms/NewGist';
import Home from './components/Layouts/Home';
import NotFound from './components/Utilities/Others/NotFoundPage'
import GistDetails from './components/Layouts/GistDetails';
import LoginForm from './components/Forms/LoginForm';
import PrivateRoute from './components/Utilities/Others/PrivateRoute'
import Notifications from './components/Layouts/Notifications';



function App() {
  return (
   
    <Router>    
      <Navbar />
      <Switch>
        <Route exact  path="/login" component={LoginForm} />
        <Route exact  path="/register" component={RegisterForm} />
        <PrivateRoute exact path="/gist/:id" component={GistDetails}/>
        <PrivateRoute exact  path="/add-gist" component={NewGist} />
        <PrivateRoute exact  path="/notifications" component={Notifications} />
        <PrivateRoute exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
      
  );
}

export default App;
