import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import Dashboard from './layouts/Dashboard.js';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={Dashboard}/>
        </Switch>
    </Router>,
    document.getElementById("root")
);
