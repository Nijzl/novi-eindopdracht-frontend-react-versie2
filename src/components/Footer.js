import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe for new recipes and regular updates up our team
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'> Subscribe </Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Reviews</Link>
                        <Link to='/signup'>Sign up</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <p> E: lorem@ipsum.com</p>
                        <p> P: 06-12345678 </p>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://instagram.com">Instagram</a>
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://youtube.com">Youtube</a>
                        <a href="https://twitter.com">Twitter</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Placeholder Name
                        </Link>
                    </div>
                    <small class='website-rights'>Placeholder name © 2022</small>
                    <div class='social-icons'>
                        <a href="https:facebook.com" class='social-icon-link facebook'>
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a href="https://instagram.com" class='social-icon-link instagram'>
                            <i class='fab fa-instagram' />
                        </a>
                        <a href="https://youtube.com" class='social-icon-link youtube'>
                            <i class='fab fa-youtube' />
                        </a>
                        <a href="https://twitter.com" class='social-icon-link twitter'>
                            <i class='fab fa-twitter' />
                        </a>
                        <a href="https://linkedin.com" class='social-icon-link linkedIn'>
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
