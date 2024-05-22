import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function AboutUs() {
    return(
    <div>
        <Navbar/>
        <p>About us here</p>


    <Link to="/">GO HOME</Link>

    </div>);
    

}

export default AboutUs;