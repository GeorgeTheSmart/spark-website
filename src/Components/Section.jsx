import React from "react";

function Section(props){
    return(
    <div>
        <div className="sec-img"><img src={props.src} height="100" width="100"/></div>
        <div className="heading"><span>{props.heading}</span></div>
        <div className="para"><p>{props.para}</p></div>
    </div>);
}

export default Section;