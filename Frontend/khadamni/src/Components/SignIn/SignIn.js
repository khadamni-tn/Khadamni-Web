
import * as React from 'react';

import { useState } from 'react';
import { useRef, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";

import { Navigate } from "react-router-dom";
import { login } from "../../redux/Slices/auth";
import { clearMessage } from "../../redux/Slices/message";
import { Link } from "react-router-dom";
import axios from 'axios';




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


  
const  handleSubmit =() => {

    // setLoading(true);

    axios.post('http://localhost:3500/auth/login',{user,pwd})
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err)})

    //   .catch(function (error) {
    //     console.log("error");
    //   });

    // dispatch(login(data, navigate))
    //   .unwrap()
    //   .then(() => {
    //     props.history.push("/Dashboard");
       
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }

  if (isLoggedIn) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <>
        {success ? (
            <section>
                <h1>You are logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to Home</a>
                </p>
            </section>
        ) : (
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
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

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                    <button>Sign In</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link to="/SignUp">Sign Up</Link>
                    </span>
                </p>
            </section>
        )}
    </>
)
}

export default SignIn;
