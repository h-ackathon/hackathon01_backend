import React from 'react';
import HeaderArray from './HeaderArray';
import {
    BrowserRouter as Link
} from "react-router-dom";

export function Header() {
    return (
        <nav>
            <ul>{
                HeaderArray.map(function (h) {
                    return <li>
                        <Link to={h.link}>{h.title}</Link></li>
                })
            }</ul>
        </nav>
    );
};

export function Loader() {
    return (
        <div className="spinner-border" />
    );
};
