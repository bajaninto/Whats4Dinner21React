import React from 'react';
import Recipes from "./Recipes";

//Greeting component - called if user is logged in and permitted to select recipe 
function Greetings(props){
       
  return(
    <div className="greetings">
            <h1>Welcome {props.userName},</h1>  
            <Recipes />
    </div>
  )
}

export default Greetings

        