import React, { Component } from 'react';

// Stateless Function Component

// const NavBar = (props) => {   // single props
const NavBar = ({ totalCounters }) => { // obj destructing
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                    <span className="badge badge-pill badge-secondary">
                        {/* {props.totalCounters} single props */}
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>

    );
};
 
export default NavBar;
