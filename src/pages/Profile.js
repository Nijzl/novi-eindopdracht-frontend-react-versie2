import React, {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {Link} from "react-router-dom";
import {Button} from "../components/Button";
import {auth} from "../FirebaseConfig";

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
                    <h4> User Logged In: </h4>
                    {user?.email}
                </div>
                <div className="logout-user">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--medium' onClick={logout}> Sign Out </Button>
                </div>
        </div>

        );
}

export default Profile;