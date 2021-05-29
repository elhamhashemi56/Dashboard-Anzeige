import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar(props) {

  const isUserLogined = () => {
    return localStorage.getItem("user_token") // => boolean
}

    return (
      <div className='navbar' id={props.id}>
        {isUserLogined() && <div className='navbar-item'><Link to='./produkt'>PRODUKT</Link></div>}
        {isUserLogined() &&<div className='navbar-item'><Link to='./admin'>ADMIN</Link></div>}
        <div className='navbar-item'><Link to='./home'>Home</Link></div>
        <div className='navbar-item'><Link to='./register'>Register</Link></div>
      </div>
    );
  }
  
  export default Navbar;
  

  