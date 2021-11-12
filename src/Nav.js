
import React  from "react";
// import { Link, NavLink } from 'react-dom';


//navigation component to provide links to other functional components
function  Nav(){

    return (
        
        <>
        <div className="nav">
           <ul className="navMenu">
            {/* <Link to= "/blog">Blog</Link>
            <Link to= "/store">Shop</Link> */}
            <li id="recipes">Recipes</li>
            <li id="shop">Shop</li>
            <li id="blog">Blog</li>     
           </ul>
        </div>
        </>
        
    )
}

export default Nav
