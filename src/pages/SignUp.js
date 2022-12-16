import React, {useState} from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase";
import "../styles/SignUp.css";
import { Button } from "../components/Button";
import {Link} from "react-router-dom";

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

    return(
        <div className="login-container">
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
                            <Link to="/profile" className="btn-mobile">
                                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={signUp}>
                                    SIGN UP
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>

                <div className='input-areas'>
                    <h1> <br/> Already have an account? </h1>
                    <div className="login-btns">
                        <Link to="/login" className="btn-mobile">
                            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                                SIGN IN
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUp;