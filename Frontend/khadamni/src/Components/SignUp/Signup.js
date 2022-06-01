import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/Slices/auth";
import { clearMessage } from "../../redux/Slices/message";
import { useNavigate, Link } from "react-router-dom";
import ProfileAppBar from "../Dashboard/profileAppBar"

import styles from './Signup.module.css'; 
import { style } from "@mui/system";





const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const SignUp = () => {




    const userRef = useRef();
    const errRef = useRef();
    const [successful, setSuccessful] = useState(false);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    

    const handleSubmit = () => {
        
        const data = {
            user: user,
            pwd: pwd
        }
        

        setSuccessful(false);

        dispatch(register(data, navigate))
            .unwrap()
            .then(() => {
                
                setSuccessful(true);
                
            })
            .catch(() => {
                setErrMsg("Username already used");
                setSuccessful(false);
            });

            
       navigate ("/SignIn")


    };

 

    return (
        
        <div  >
            <ProfileAppBar/>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

            <div className={styles.registerBox}>
            <div >
               <div >
                   <div className={styles.title} >
                    <h1>Register</h1>
                    </div>
                </div>
                
                    <div className={styles.credentiels}>
                    <label htmlFor="user">
                        Username

                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? false : true}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                   <div className={userFocus && !validName ? "" : styles.hidden}>
                    <p id="uidnote" >

                        4 to 24 characters.<br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                    </div> 
                    </div>
                    <div className={styles.credentiels}>
                    <label htmlFor="pwd">
                        Password

                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? false : true}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ?  "" : styles.hidden}>

                        8 to 24 characters.<br />
                        Must include uppercase and lowercase letters, a number and a special character.<br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>
                    </div>
                    <div className={styles.credentiels}>
                    <label htmlFor="confirm_pwd">
                        Confirm Password:

                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? false : true}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "" : styles.hidden}>

                        Must match the first password input field.
                    </p>
                    </div>
                    <div className={styles.bottom}>
                    <button disabled={!validName || !validPwd || !validMatch ? true : false} onClick={handleSubmit} > Sign Up </button>

                <p>
                    Already registered?<br />
                    <span className="line">
                        {/*put router link here*/}
                        <Link to="/SignIn">Sign In</Link>
                    </span>
                </p>
                
                    </div> 
                
               
            </div>



            {message && (
                <div className="form-group">
                    <div
                        className={successful ? "alert alert-success" : "alert alert-danger"}
                        role="alert"
                    >
                        {message}
                    </div>
                </div>
            )}
        </div>
        </div>
    )
}
export default SignUp