import React, { useState } from 'react';

//login screeen with user name and password to personalize user experience and allow "favourites" to be saved

function UserLogin(props) {

    //capture password for future validation*****
    // const handleChangePswd = (event) => {
    //     event.preventDefault();
    //     console.log("handle Change Pswd")
    // };
     
    return(
        <div className="login">
            <h3>Here is a fun tool for preparing great meals using the ingredients in your kitchen. </h3>
            {/* <h4>Enter your name to get started</h4> */}
            <form action="#" className="userLoginForm">
                <input type="text"  className= "username"  onChange={props.changeUser} placeholder="Enter Username to get started"/>
                {/* <div>
                    <input type="text" className= "password"  onChange={handleChangePswd} placeholder="Enter Password"/>
                </div> */}
                <button className= "foodButton loginButton" onClick={props.loginFunction}>{props.loginStatus ? "Logout" : "Login"}</button>  
            </form>
        </div>
    );
};

export default UserLogin