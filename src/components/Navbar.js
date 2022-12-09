import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
import { Button } from "./Button";

function Navbar(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    /* IF THE SCREEN GETS TO SMALL THE BUTTON DISAPPEARS */
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    /* ACTUALLY HIDES BUTTON WHEN SCREEN GETS TOO SMALL*/
    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Placeholder Name
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/allrecipes" className="nav-links" onClick={closeMobileMenu}>
                                All Recipes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favourites" className="nav-links" onClick={closeMobileMenu}>
                                Favourites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
                                Search
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-links" onClick={closeMobileMenu}>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    <Link to="/signup" className="btn-mobile">
                        {button && <Button buttonStyle="btn--outline"> SIGN UP </Button>}
                    </Link>
                </div>
            </nav>
        </>
    );

}

export default Navbar;