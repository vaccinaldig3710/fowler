import React, {useState} from 'react';
import logo from '../images/logo.png';
import youtubeLogo from '../images/youtube-logo.png';
import faceBookLogo from '../images/facebook-logo.png';
import xLogo from '../images/twitter-x-logo.png';
import login from '../images/login.png'
import dropIcon from '../images/dropdown.png'


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <header className='header'>
          <nav className="nav">
            <div className='nav-container flex-between align-center'>
              <div className='menu-logo flex align-center'>
              {/* Hamburger Menu for small screens */}
              <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className={`bar top-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar middle-bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar bottom-bar ${menuOpen ? 'open' : ''}`}></span>
              </div>
              {/* Nav List (Hidden on small screens, visible when menuOpen is true) */}
              <div  className={`list-container ${menuOpen ? 'show' : 'hide'}`}>
              <ul  className={`nav-list ${menuOpen ? 'show' : 'hide'}`}>
                <li><a href="#home" className="nav-link">Home</a></li>
                <li className="dropdown">
                    <a href="#auctions" className="nav-link dropdown-toggle">Auctions
                    <img src={dropIcon} alt='Dropdown Icon' className='dropdown-icon' />

                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="#live-auctions" className="dropdown-item">Live Auctions</a></li>
                        <li><a href="#online-auctions" className="dropdown-item">Online Auctions</a></li>
                    </ul>
                </li>
                <li><a href="#listings" className="nav-link">Real Estate Listings</a></li>
                <li className="dropdown">
                    <a href="#why" className="nav-link dropdown-toggle">
                        Why Auction?
                        <img src={dropIcon} alt='Dropdown Icon' className='dropdown-icon' />
                        </a>
                    <ul className="dropdown-menu">
                        <li><a href="#live-auctions" className="dropdown-item">Why Should I Auction?</a></li>
                        <li><a href="#online-auctions" className="dropdown-item">Can I Auction?</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#auctions" className="nav-link dropdown-toggle">About Us</a>
                    <ul className="dropdown-menu">
                        <li><a href="#live-auctions" className="dropdown-item">About Fowlers Auctioneers</a></li>
                        <li><a href="#online-auctions" className="dropdown-item">Our Staff</a></li>
                        <li><a href="#online-auctions" className="dropdown-item">Fowler News</a></li>
                        <li><a href="#online-auctions" className="dropdown-item">Testimonials</a></li>
                    </ul>
                </li>                <li><a href="#login" className="nav-link">Contact Us</a></li>
              </ul>
              </div>  
              <img src={logo} alt="Fowler Logo" className="logo"/>
           
              </div>

               <div className='socials-container'>
                <img src={youtubeLogo} alt="Youtube Logo" className="socials"/>
                <img src={faceBookLogo} alt="Facebook Lemon Logo" className="socials"/>
                <img src={xLogo} alt="X/Twitter Logo" className="socials"/>
                <img src={login} alt="Login Icon" className="socials"/>
               </div>
            </div>


          </nav>   
        </header>
      );
}

export default Header;