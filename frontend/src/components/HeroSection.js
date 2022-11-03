// import React,{useState} from 'react';

import Button from "./Button";
// import { useState } from "react";

const HeroSection = ({ handleClick, setLocation, places }) => {

    // const [loacation,setLocation]= useState(null)

    return (
        <div className="hero-section">
            <div className="btn-container">
                <Button title="login" handleClick={() => handleClick('login')} />
                <Button title='create an account' size='md' isOutline={true} handleClick={() => handleClick('signup')} />
            </div>

            <div className="content-wrapper">
                <div className="logo">e!</div>
                <h1 className="head">Find the best restaurants,cafes and bars.</h1>

                <div className="searchbox" style={{ display: 'flex', gap: '20px' }}>
                </div>
                <div>
                    <input type="text" placeholder="please type a location" onChange={(e)=> setLocation(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Search for restaurants" />
                </div>
            </div>
        </div>
        
    )
}
export default HeroSection;