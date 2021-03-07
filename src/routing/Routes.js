import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Auth from "./views/Auth";
import Tab from "./views/Tab";

const Routes = () => {
    return (
        <Router>
            <Route exact path="/teams/tab" component={Tab} />
            <Route exact path="/auth" component={Auth} />
        </Router>
    )
}

export default Routes;