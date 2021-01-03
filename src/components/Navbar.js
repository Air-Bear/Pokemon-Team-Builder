import React from "react";
import Hamburger from "./Hamburger.js"
import { NavLink } from "react-router-dom";
import logo from "../logo.jpg"

function NavBar(){
    return(
        <nav>
            <ul>
                <li className="navLink">
                    <NavLink to="">profile</NavLink> 
                </li>
                <li className="navLink">
                    <NavLink to="">login</NavLink> 
                </li>
                <li className="navLink">
                    <NavLink to="">register</NavLink> 
                </li>   
                <li className="navIcon">
                    <Hamburger />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar