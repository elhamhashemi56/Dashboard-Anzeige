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
import Home from './Home'
import Produkt from './Produkt'
import Uberuns from './Uberuns'
import Lernen from './Lernen'
import Losung from './Losung'

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
              <Route path='/uberuns'><Uberuns /></Route>
              <Route path='/losung'><Losung /></Route>
              <Route path='/lernen'><Lernen /></Route>
            </Switch>
          </div>
      <div id='footer'>footer</div>

    </div>
    </Router>
  );
}

export default Dashboard;
