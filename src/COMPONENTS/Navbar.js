import './Navbar.css'
import {Link} from "react-router-dom";
function Navbar(props) {
  const isUserLogined = () =>{
    localStorage.getItem
  }

    return (
      <div className='navbar' id={props.id}>
        {isUserLogined() && <div className='navbar-item'><Link to='./produkt'> PRODUKT</Link></div>}
        <div className='navbar-item'><Link to='./losung'>LÖSUNG</Link></div>
        <div className='navbar-item'><Link to='./uberuns'>ÜBER UNS</Link></div>
        <div className='navbar-item'><Link to='./lernen'>LERNEN</Link></div>
        <div className='navbar-item'><Link to='./admin'>ADMIN</Link></div>
      </div>
    );
  }
  
  export default Navbar;
  

  