import React from "react";
import Section from "./Section";
import NavBar from "./NavBar";
import AllSections from "./AllSections";

function App(){
    return(
    <div className="container">
        <NavBar />
            <div className="head-cont">    
                <h1 id="what-learn">What Will you learn ?</h1>
            </div>
           <div className="sub-div">
                <div className="design-thinking">
                    <div><span>DESIGN</span></div>
                    <div><span>THINKING</span></div>
                </div>
                <AllSections />
            </div>
        <div className="main-guests-sec">
            <div className="guest-title"><span>CHIEF GUESTS</span></div>
            <div className="guest-img-cont">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>    
    </div>
);
}

export default App;