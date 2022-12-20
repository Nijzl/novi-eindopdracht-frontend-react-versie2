import React, {useState} from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase";
import "../styles/SignUp.css";
import { Button } from "../components/Button";
import {Link, redirect, useNavigate} from "react-router-dom";

function SignUp(){

    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("Create User Successful");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                /*const errorMessage = error.message;*/
                alert(errorCode);
                // ..
            });
    }

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert("You are signed in");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                /*const errorMessage = error.message;*/
                alert(errorCode);
            });
    }

    return(
        <div className="login-container">
            <h1> SIGN IN </h1>
            <section className="login-content">
                <div className="input-areas">
                    <form>
                        <input
                            className="login-input"
                            name="email"
                            type={"email"}
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            className="login-input"
                            name="password"
                            type={"password"}
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <div className="login-btns">
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={signIn}>
                                SIGN IN
                            </Button>
                        </div>
                    </form>
                </div>

{/*                <div className='input-areas'>
                    <h1> <br/> Already have an account? </h1>
                    <div className="login-btns">
                        <Link to="/login" className="btn-mobile">
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                                SIGN IN
                            </Button>
                        </Link>
                    </div>
                </div>*/}

            </section>
            <h1> SIGN UP </h1>
            <section className="login-content">
                <div className="input-areas">
                    <form>
                        <input
                            className="login-input"
                            name="email"
                            type={"email"}
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input
                            className="login-input"
                            name="password"
                            type={"password"}
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}/>
                        <div className="login-btns">
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={signUp}>
                                SIGN UP
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default SignUp;