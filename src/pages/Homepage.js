import React from "react";
import { Link } from "react-router-dom";
import Profile from '../assets/profile-2.jpeg';
import transition from "../transition";

const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <Link to='/about'>
                <img src={Profile}/>
            </Link>
        </div>
    );
};

export default transition(Homepage);