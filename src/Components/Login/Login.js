import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../images/google.png';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;

        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         console.log(errorCode, errorMessage);
        });
    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div style={{width:'250px'}} className="container d-flex flex-column">
            <img className="m-5" src={google} alt="" />
            <br />
            <button onClick={handleGoogleLogin} className="btn btn-outline-success p-2"> Log in With Google</button>
            </div>
        </div>
    );
};

export default Login;