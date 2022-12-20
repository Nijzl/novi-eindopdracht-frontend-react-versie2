import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscribe for more games and regular updates up our team
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
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> ABOUT </h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Reviews</Link>
                        <Link to='/signup'>Sign up</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2> CONTACT </h2>
                        <p> E: lorem@ipsum.com</p>
                        <p> P: 06-12345678 </p>
                    </div>
                </div>
{/*                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> SOCIALS </h2>
                        <a href="https://instagram.com">Instagram</a>
                        <a href="https://facebook.com">Facebook</a>
                        <a href="https://youtube.com">Youtube</a>
                        <a href="https://twitter.com">Twitter</a>
                    </div>
                </div>*/}
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Placeholder Name
                        </Link>
                    </div>
                    <small className='website-rights'>Placeholder name © 2022</small>
                    <div className='social-icons'>
                        <a href="https:facebook.com" className='social-icon-link facebook'>
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a href="https://instagram.com" className='social-icon-link instagram'>
                            <i className='fab fa-instagram' />
                        </a>
                        <a href="https://youtube.com" className='social-icon-link youtube'>
                            <i className='fab fa-youtube' />
                        </a>
                        <a href="https://twitter.com" className='social-icon-link twitter'>
                            <i className='fab fa-twitter' />
                        </a>
                        <a href="https://linkedin.com" className='social-icon-link linkedIn'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
