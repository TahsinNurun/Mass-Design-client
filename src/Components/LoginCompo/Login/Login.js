import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../Images/logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                const { displayName, email } = user;
                const newUser ={
                    name: displayName,
                    email: email
                }
                console.log(newUser);
                setLoggedInUser(newUser);
                // setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email);

            });

    }
    return (
        <div className="text-center">
            <div>
                <img style={{ height: '70px' }} src={logo} alt="" />
            </div>
            <div >
                <h3>Login With</h3>
                <br/>
                <button onClick={handleGoogleSignIn} className="btn-brand my-3"><FontAwesomeIcon className="icon active-icon" icon={faGoogle} /> Google Sign In</button>
                <br/>
                <p>Dont have an account? please log in with google</p>
            </div>
        </div>
    );
};

export default Login;