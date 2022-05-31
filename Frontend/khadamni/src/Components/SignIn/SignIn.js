
import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRef, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { login } from "../../redux/Slices/auth";
import { clearMessage } from "../../redux/Slices/message";
import { Link } from "react-router-dom";
import ProfileAppBar from "../Dashboard/profileAppBar"
import SignInStyle from './SignIn.module.css'; 



 const  SignIn = (props) => {
    


    const LOGIN_URL = '/auth';
    const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);
    

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])


  
const  handleSubmit = async () => {
    try {
    // setLoading(true);

    
        console.log("test")
          const response = await axios.post("http://localhost:3500/auth",
              { user, pwd },
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(response)
          
  
  const accessToken = response.data.accessToken;
  const roles = response.data.roles;
  
  console.log(accessToken)
  
  if (accessToken != null) {
    
    navigate ("/Dashboard")    
    
  }
  }
   catch (err) {
    setSuccess(false);
    setErrMsg("Incorrect username or password");
}


}


  

  return (
    <>
    
         

            <section>
                    <ProfileAppBar/>

            <div className={SignInStyle.signInBox}>
               <div className={SignInStyle.title}>
                <h1>Sign In</h1>
                </div> 
               <div className={SignInStyle.errorMessage}>
                  <p ref={errRef} className={SignInStyle.errmsg}>{errMsg}</p>
               </div> 
                <div >
                    <div className={SignInStyle.credentiels}>
                        <label htmlFor="username">Username:</label>
                        <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                          />
                    </div>
                    <div className={SignInStyle.credentiels}>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    </div>

                </div>
                <div className={SignInStyle.bottom}>    
                <button  onClick={handleSubmit}>Sign In</button>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link to="/SignUp">Sign Up</Link>
                    </span>
                </p>
                </div>
                </div>
            </section>
        
       
    </>
)
}

export default SignIn;
