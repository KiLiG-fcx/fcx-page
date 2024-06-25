import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import '../assets/styles/ComponentStyle.css';


const NavBar = () => {
    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <Button onClick={()=>navigate('/')} type="primary">
                Home
            </Button>
            <Button onClick={()=>navigate('/works')} type="primary">
                My Work
            </Button>
        </nav>
    )
}

export default NavBar;