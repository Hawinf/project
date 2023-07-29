import React from "react";
import transition from "../transition";
import Marquee from "react-fast-marquee";
import Profile from '../assets/profile-2.jpeg';
import Cover from '../assets/Cover.svg';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-header">
                
            </div>
            <div className="judul-about">
                <Marquee>
                    <h4>about   about   about   about   about   about   about   about   about   about   about   about</h4>
                    <h4>about   about   about   about   about   about   about   about   about   about   about   about</h4>
                    <h4>about   about   about   about   about   about   about   about   about   about   about   about</h4>
                </Marquee>
            </div>
            <div className="profile-about">
                <img src={Profile} />
            </div>
            <div className="cards">
                <div className="card">
                    <img src={Cover} />
                </div>
                <div className="card">
                    <img src={Cover} />
                </div>
                <div className="card">
                    <img src={Cover} />
                    <p>kkkkkkkkkkk</p>
                </div>
            </div>
        </div>
    );
};

export default transition(About);