import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import Stats from './stats';
import AddMatchForm from './AddMatchForm';
import AddPlayerForm from './AddPlayerForm';
import AddTeamForm from './AddTeamForm';
import CommonComponents from './common';
import HeaderArray from './common/HeaderArray';

export default function () {
    return (
        <Router>
            <Fragment>
            <nav>
            <ul>{
                HeaderArray.map( h =>
                    <li><Link to={h.link}>{h.title}</Link></li>
                )
            }</ul>
        </nav>
                <Switch>
                    <Route path="/stats">
                        <Stats />
                    </Route>
                    <Route path="/teams">
                        <AddTeamForm />
                    </Route>
                    <Route path="/matches">
                        <AddMatchForm />
                    </Route>
                    <Route path="/players">
                        <AddPlayerForm />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
};
