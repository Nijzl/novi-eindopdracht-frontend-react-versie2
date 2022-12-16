import React from "react";

import { getAuth, signOut } from "firebase/auth";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";

function Profile(){

    const auth = getAuth();
    const user = auth.currentUser;

    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }

    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        alert("Something went wrong. Try again")
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