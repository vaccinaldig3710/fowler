import logo from '../images/logo.png';
import youtubeLogo from '../images/youtube-logo.png';
import faceBookLogo from '../images/facebook-logo.png';
import xLogo from '../images/twitter-x-logo.png';
import login from '../images/login.png'
import dropIcon from '../images/dropdown.png'
import React, {useState} from 'react';


function Footer() {
    return (
        <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@fowlersauction.com</p>
            <p>Phone: +123-456-7890</p>
            </div>


            <div class="footer-section">
            <h4>Follow Us</h4>
            <div class="social-icons">
                <a href="#"><img src={faceBookLogo} alt="Facebook" /></a>
                <a href="#"><img src={xLogo} alt="X/Twitter" /></a>
                <a href="#"><img src={youtubeLogo} alt="Youtube" /></a>
            </div>
            </div>
            <div class="footer-section">
            <h4>Quick Links</h4>
            <ul class="footer-links">
                <li><a href="#auctions">Auctions</a></li>
                <li><a href="#listings">Real Estate Listings</a></li>
                <li><a href="#why-auction">Why Auction?</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Fowler's Auctioneers. All Rights Reserved.</p>
        </div>
        </footer>
    );
  }
  
  export default Footer;