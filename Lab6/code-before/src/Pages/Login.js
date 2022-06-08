import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/init";
import {logInWithFacebook, logInWithGoogle } from "../Firebase/users";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if (loading)
            return
        if (user)
            navigate("/students");
        if(error)
            console.error({error});
        }, [user, loading]);


    const loginWithPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    return (
    <div className="login">

        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
        />
        <br/>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <br/>
        <button onClick={loginWithPassword}>
            Login
        </button>
        <br/>
        <button onClick={logInWithGoogle}>
            Login with Google
        </button>
        <br/>
        <button onClick={logInWithFacebook}>
            Login with Facebook
        </button>
        <br/>
        <div>
            Don't have an account? <Link to="/register">Register</Link> now.
        </div>

    </div>
    );
}
export default Login;
