import React, { Fragment } from 'react';
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Greetings from './Greetings';
import Footer from './Footer';
import Nav from './Nav';
import UserLogin from './UserLogin';
import Store from './Store';
import Blog from './Blog';
import Router from './Router';

import './App.css';
import {useState} from 'react';


function App() { 
// //initialize state for login status and user
const [loginStatus, setLoginStatus] = useState(false);
const [userFirstName, setUserFirstName]= useState('');
// // const [userName, setUserName] =useState('');

// //save user name from input to be used in render
  const handleChangeUser = (event) =>{ 
      console.log('running handleChangeUser');
      event.preventDefault();
      const userName1 = event.target.value;
      console.log(userName1);
      console.log(event.target.value)
      setUserFirstName(userName1);
  };

// //capture password for future validation*****
// const handleChangePswd = (event) => {
//     event.preventDefault();
//     console.log("handle Change Pswd")
// };

// //on login submission, change loginStatus, check for a username and display Greeting or Recipe component

  const handleClick = (event) => {
      event.preventDefault();
      // console.log('running handleClick');
      setLoginStatus(!loginStatus);
      console.log(loginStatus);   
  };   
 
  return (
    <>
      <Nav /> 
      <Header />  
      {loginStatus 
        ? <Greetings userName={userFirstName}/>      
        : <UserLogin loginFunction={handleClick} loginValue={loginStatus} changeUser={handleChangeUser}/>
      } 
      <Footer />    
    </>
  );
} 
export default App;
