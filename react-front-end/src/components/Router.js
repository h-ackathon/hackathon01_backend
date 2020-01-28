import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Stats from './stats';
import CommonComponents from './common';

export default function () {
    return (
        <Router>
            <Fragment>
                <CommonComponents />
                <Switch>
                    <Route path="/stats">
                        <Stats />
                    </Route>
                </Switch>
            </Fragment>
        </Router>
    );
};
