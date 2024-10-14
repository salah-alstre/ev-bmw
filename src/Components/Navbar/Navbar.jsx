import './Navbar.css';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">
        {/* <img src={logo} alt="Logo" className="logo-image" />  */}
        EV-olution
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
 