import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './Dashboard.css';
import Logo from './Logo'
import Navbar from './Navbar'
import Produkt from './Produkt'
import Register from './Register'
import Admin from './Admin'
import Home from './Home'

function Dashboard() {
  
  return (
    <Router>
    <div className='dashboard'>
      
      <Logo id='logo' />
      <Navbar id='navbar' />
      {/* <div id='logo'>logo</div>
      <div id='navbar'>navbar</div> */}
      <div id='main'>
            <Switch>
              <Redirect exact path='/' to='/home'></Redirect>
              <Route path='/home'><Home /></Route>
              <Route path='/produkt'><Produkt /></Route>
              <Route path='/admin'><Admin /></Route>
              <Route path='/register'><Register /></Route>

            </Switch>
          </div>
      <div id='footer'></div>

    </div>
    </Router>
  );
}

export default Dashboard;
