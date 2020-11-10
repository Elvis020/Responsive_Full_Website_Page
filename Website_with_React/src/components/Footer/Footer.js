import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTypo3, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the adventure newsletter to recieve our best vacation deals</p>
        <p className="footer-subscription-text">You can unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input type="text" type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link path="/">Testimonials</Link>
            <Link path="/">Careers</Link>
            <Link path="/">Investors</Link>
            <Link path="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">How it Works</Link>
            <Link path="/">Support</Link>
            <Link path="/">Contact</Link>
            <Link path="/">Destinations</Link>
            <Link path="/">SPonsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link path="/">Submit Video</Link>
            <Link path="/">Ambassadors</Link>
            <Link path="/">Agency</Link>
            <Link path="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link path="/">Facebook</Link>
            <Link path="/">Youtube</Link>
            <Link path="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              sPaCeY <FaTypo3 className="fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">sPaCeY &copy; 2020 All Rights Reserved</small>
          <div className="social-icons">
            <Link to="/" target="_blank" aria-label="Facebook" className="social-icon-link facebook">
              <FaFacebookF className="fa-facebook-f" />
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
              <FaInstagram className="fa-instagram" />
            </Link>
            <Link to="/" target="_blank" aria-label="Youtube" className="social-icon-link youtube">
              <FaYoutube className="fa-youtube" />
            </Link>
            <Link to="/" target="_blank" aria-label="Instagram" className="social-icon-link instagram">
              <FaInstagram className="fa-instagram" />
            </Link>
            <Link to="/" target="_blank" aria-label="LinkedIn" className="social-icon-link linkedin">
              <FaLinkedinIn className="fa-linkedIn" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
