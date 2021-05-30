import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar(props) {

  const isUserLogined = () => {
    return localStorage.getItem("user_token") // => boolean
}

    return (
      <div className='navbar' id={props.id}>
        <div className='navbar-item'><Link to='./home'>HOME</Link></div>
        {isUserLogined() && <div className='navbar-item'><Link to='./produkt'>PRODUCT</Link></div>}
        <div className='navbar-item'><Link to='./register'>SIGN IN / SIGN UP</Link></div>
      </div>
    );
  }
  
  export default Navbar;
  

  