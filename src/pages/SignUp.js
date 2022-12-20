import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../FirebaseConfig";
import "../styles/SignUp.css";
import { Button } from "../components/Button";

function SignUp(){

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    })


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
            alert(error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <div className="login-container">
            <div className="register-user">
                <h3> Register User </h3>
                <input
                    className="auth-input"
                    type={"email"}
                    placeholder="Your Email"
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    className="auth-input"
                    type={"password"}
                    placeholder="Your Password"
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium' onClick={register}> Create User </Button>
            </div>
            <div className="login-user">
                <h3> Login </h3>
                <input
                    className="auth-input"
                    type={"email"}
                    placeholder="Your Email"
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    className="auth-input"
                    type={"password"}
                    placeholder="Your Password"
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium' onClick={login}> Login</Button>
            </div>
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

export default SignUp;