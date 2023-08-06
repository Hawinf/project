import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Profile from '../assets/profile-2.jpeg';
import ArrowRight from '../assets/arrow_right.svg';
import Portofolio from '../assets/portofolio1.png';
import Background from '../assets/background.jpg';
import Css from '../assets/css.png';
import JsLogo from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Boots from '../assets/bootstrap-framework-logo.png';
import Nodel from '../assets/nodejs.png';
import Ig from '../assets/instagram.png';
import HtmlL from '../assets/html.png';
import Github from '../assets/github.png';
import Twitter from '../assets/twitter.png';
import transition from "../transition";
import Download from '../assets/download-solid.svg';
import Note from '../assets/file-waveform-solid.svg';
import './Homepage.css'

const Homepage = () => {

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({})
   
    const api = {
        key: '8c835770d8a2b98be9a16d0df2abad57',
        // baseUrl: 'https://api.openweathermap.org/data/2.5/', 
   }

   const handleSearch = () => {
    // console.log(search)
    fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}&&unit=metric`)
        .then((res) => res.json())
        .then((results) => {
            console.log(results);
            setSearch(results)
        })
   }


    return (
        
        <div className="homepage">

            <div className="fisrt-section">
                <Link  className="profile-picture" to='/about'>
                    <div className="about">
                        <div>
                            <img src={Profile}/>
                        </div>
                        <div className="profile-desc">
                            <p className="tittle">Hi, Everyone</p>
                            <h4 className="name">Hawin <span>Fahmi</span></h4>
                            <p className="tittle-1">I am a Frontend Developer based in Dubai</p>
                        </div>
                    </div>
                </Link>

                <div className="right-section">
                    <div className="text-typing">
                        <Marquee>
                                {/* <p>Hello world, i am a passionate frontend developer. I am Currently Looking for opportunity to use my skills.</p> */}
                                <p>Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World Hello World</p>
                                
                        </Marquee>
                    </div>
                    <div className="mid-section">
                        <Link to='/about' className="portofolio">
                            <div>
                                <img src={Portofolio} />
                                <p className="works">My Latest Works</p>
                            </div>
                        </Link>
                        <div className="weather">
                            <div className="input">
                                <input 
                                type="text"
                                placeholder="Enter Your City"
                                onChange={(e) => setSearch(e.target.value)}
                                />
                                <button onClick={handleSearch}>Search</button>
                            </div>
                            <div className="results">
                                { typeof search.main !== 'undefined' ? (
                                    <>
                                        <p>{search.name}</p>
                                        <p>{search.main.temp} °C</p>
                                        <p>{search.weather[0].description}</p>
                                    </>
                                ): (
                                    <>
                                        <p>Check Weather By</p>
                                        <p>Submitting Your City</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="technology-section">
                <div className="tech-tittle">
                    <h1>Tools</h1>
                </div>
                <div className="technology">
                    <Marquee>
                        <div>
                            <img src={HtmlL} />
                        </div>
                        <div>
                            <img src={Css} />
                        </div>
                        <div>
                            <img src={Boots} />
                        </div>
                        <div>
                            <img src={JsLogo} />
                        </div>
                        <div>
                            <img src={ReactLogo} />
                        </div>
                        <div>
                            <img src={Nodel} />
                        </div>
                    </Marquee>
                </div>
            </div>

            <div className="last-section">
                <div className="download">
                    <Link to='https://github.com/Hawinf'>
                        <p>Download CV</p>
                        <img src={Download} />
                    </Link>
                </div>
                <div className="repositories">
                    <Link to='https://github.com/Hawinf'>
                        <p>My Repositories</p>
                        <img src={Note} />
                    </Link> 
                </div>
                <div className="social-media">
                    <div>
                        <p>Social Media </p>
                    </div>
                    <Link to='https://www.instagram.com/hawinf_/'>
                        <img className="media-1" src={Ig} />
                    </Link>
                    <Link to='https://twitter.com/HawwnFahmi'>
                        <img   className="media-1" src={Twitter} />
                    </Link>
                </div>
            </div>
            

            <div className="footer">
                <p>© 2022 Hawinf. All rights reserved</p>
            </div>
        
    </div>
    );
};

export default transition(Homepage);