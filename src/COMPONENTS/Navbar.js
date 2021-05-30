import './Navbar.css'
import {Link, useHistory} from "react-router-dom";

function Navbar(props) {

    const history = useHistory();

    const isUserLogined = () => {
        return localStorage.getItem("user_token") // => boolean
    }

    const handleSignClick = () => {
        if (isUserLogined()) {
            localStorage.removeItem("user_token")
            window.location.reload();
        } else
            history.push("/register")
    }

    return (
        <div className='navbar' id={props.id}>
            <div className='navbar-item'><Link to='./home'>HOME</Link></div>
            {isUserLogined() && <div className='navbar-item'><Link to='./produkt'>PRODUCT</Link></div>}
            <div className='navbar-item'><a href={"javascript:void(0)"}
                onClick={handleSignClick}>{isUserLogined() ? "SIGN OUT" : "SIGN IN / SIGN UP"}</a></div>
        </div>
    );
}

export default Navbar;


