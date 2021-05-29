import bild from './images/logo.png'
import './Logo.css'
function Logo(props) {
  return (
    <div className='logo' id={props.id}>
      <img src={bild}></img>

    </div>
  );
}

export default Logo;
