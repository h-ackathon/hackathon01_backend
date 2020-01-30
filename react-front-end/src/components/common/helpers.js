import React from 'react';
import HeaderArray from './HeaderArray';
import {
    BrowserRouter as Link
} from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <ul>{
                HeaderArray.map( h =>
                    <li><Link to={h.link}>{h.title}</Link></li>
                )
            }</ul>
        </nav>
    );
};

export function Loader() {
    return (
        <div className="spinner-border" />
    );
};
