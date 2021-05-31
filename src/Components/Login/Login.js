import React, { useContext } from 'react';
import Navbar from '../Home/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import google from '../../images/google.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedinUser(signedInUser);
            history.replace(from);

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