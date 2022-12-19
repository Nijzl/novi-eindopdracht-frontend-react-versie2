import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

function Profile(){

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });


    return(
        <div className="login-container">
            <h1> PROFILE PAGE </h1>
            <section className="login-content">
                <div className="input-areas">
                    <form>
                        <div className="login-btns">
                            <Link to="/profile" className="btn-mobile">
                                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={signOut}>
                                    SIGN OUT
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>

        );
}

export default Profile;