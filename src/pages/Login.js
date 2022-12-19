import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Link, Navigate, redirect} from "react-router-dom";
import {Button} from "../components/Button";

function Login(){

    const auth = getAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
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
                                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={signIn}>
                                    SIGN IN
                                </Button>
                        </div>
                    </form>
                </div>

                <div className='input-areas'>
                    <h1> <br/> Don't have an account yet? </h1>
                    <div className="login-btns">
                        <Link to="/signup" className="btn-mobile">
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                                SIGN UP
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;