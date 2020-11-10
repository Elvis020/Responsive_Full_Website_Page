import React ,{useEffect} from "react";
import { FaTypo3, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Navbar.css';
import {Button} from '../Button/Button';



function Navbar() {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }else{
      setButton(true);
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize',showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            sPaCeY <FaTypo3 className='fa-typo3' />
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            {click ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={() => setClick(false)}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={() => setClick(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="nav-links-mobile" onClick={() => setClick(false)}>
                Sign Up
              </Link>
            </li>
          </ul>

          {button && <Button buttonStyle='btn--outline' >SIGN UP</Button> }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
