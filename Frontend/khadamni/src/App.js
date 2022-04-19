
import './App.css';
import React from 'react';
import Body from "./Components/Body/Body";
import PrimarySearchAppBar from "./Components/Header/AppBar";
import ProfileAppBar from './Components/Dashboard/profileAppBar';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  SignUp from "./Components/SignUp/Signup";
import  SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import JobberSignUp from "./Components/JobberSignUp/JobberSignUp";
import  Post from "./Components/PostService/PostService";
import  ListOfServices from "./Components/ListOfServices/ListOfServices";
import  PostService from "./Components/PostService/PostService";
import  Posts from "./Components/posts/posts";
import  Listofjobbers from "./Components/listofjobbers/listofjobbers"



const  App = () => (
 
  <div className="App">
    
    <div>
   
   
   
  
  <div>
    <Router>
    <Routes>
           <Route path="/" element={<Body/>}/>
           <Route path="/SignUp" element={<SignUp/>}/>
             <Route path="/SignIn" element={<SignIn/>}/>
       
         <Route path="/Dashboard" element={<Dashboard/>}/>
         <Route path="/Post" element={<Post/>}/>
         <Route path="/JobberSignUp" element={<JobberSignUp/>}/>
         <Route path="/ListOfServices" element={<ListOfServices/>}/>
         <Route path="/PostService" element={<PostService/>}/>
         <Route path="/Dashboard/Posts" element={<Posts/>}/>
         <Route path="/Dashboard/FilteredJobbers" element={<Listofjobbers/>}/>
        </Routes>
       </Router>
   </div>
  </div>
  
   </div>

   
   

    
    
    
);
export default App;
