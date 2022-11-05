import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

//Pages
import LoginPage from './Pages/authPages/Login/Login';
import RegisterPage from './Pages/authPages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/register'>
          <RegisterPage />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Redirect to='/dashboard' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
