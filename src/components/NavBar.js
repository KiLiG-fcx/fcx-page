import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <ul>
                <li>
                    <button onClick={() => navigate('/')}>Home</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;