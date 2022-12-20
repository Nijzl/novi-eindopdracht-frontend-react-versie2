import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from "../components/Button";
import { auth } from "../FirebaseConfig";
import "../styles/SignUp.css";

function Profile(){

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    })

    const [user, setUser] = useState({});

    const logout = async () => {
        await signOut(auth);
    };

    return(
        <div className="login-container">
            <h1> PROFILE PAGE </h1>
                <div className="current-user">
                    <h4> User Logged In: {user?.email} </h4>
                </div>

                <div className="logout-user">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={logout}> Sign Out </Button>
                </div>
        </div>

        );
}

export default Profile;