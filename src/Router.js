import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Store from "./Store";
import Blog from "./Blog";

const Router = () => {

    return (
<   BrowserRouter>
        <Switch>
            <Route  exact path ="/" component ={App}/>
            <Route path="/shop" component ={Store}/>
            <Route path="/blog" component ={Blog}/>
        </Switch>
    </BrowserRouter>    
    )

}

export default Router