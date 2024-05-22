
import React from "react";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import "../Home.css";
import pic from "../images/pic2.jpg";



function Home(){
    return(
        <>
        <Navbar/>

        <div style={{ position: 'relative', textAlign: 'center' }}>
        <img className="image" src={pic} alt="Description of the image"/>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
          <h1 style={{color:"grey"}}>WELCOME TO HOME PAGE</h1>
         
        </div>
      </div>
    
        </>
    )
}

export default Home;