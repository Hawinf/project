import React from "react";
import transition from "../transition";
import Marquee from "react-fast-marquee";
import Profile from '../assets/profile-2.jpeg';
import Cover from '../assets/Cover.svg';
import Cover1 from '../assets/cover1.png';
import Landsnature from '../assets/landsnature.png';
import LandingPage from '../assets/landing-page.svg';
import LandingPage1 from '../assets/Landingpage1.png'
import './About.css';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="about-header">
                
            </div>
            <div className="judul-about">
                <Marquee>
                    <h4>about my lastest works about my lastest works about my lastest works about my lastest works about my lastest works about my lastest works</h4>
                </Marquee>
            </div>
            <div className="profile-about">
                <img src={Profile} />
            </div>
            <div className="cards">
                <div className="card">
                    <img src={Cover1} />
                    <div className="card-link">
                        <Link to='https://github.com/Hawinf/customer-page-binar-car-rental'>
                            Source Code
                        </Link>
                        <Link  to='https://hawin.vercel.app/'>
                            Visit Site
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img src={LandingPage1} />
                    <div className="card-link">
                        <Link to='https://github.com/Hawinf/admin-page-binar-car-rental'>
                            Source Code
                        </Link>
                        <Link  to='https://github.com/Hawinf/admin-page-binar-car-rental'>
                            Visit Site
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <img src={Landsnature} />
                    <div className="card-link">
                        <Link to='https://github.com/Hawinf/landsnatures'>
                            Source Code
                        </Link>
                        <Link to='https://landsnature.com/'>
                            Visit Site
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>© 2022 Hawinf. All rights reserved</p>
            </div>

        </div>
    );
};

export default transition(About);