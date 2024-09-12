import React from "react";
import Section from "./Section";

function AllSections(){
    return(
    <div className="side-sec">
        <div className="sec-lef-sec">
            <Section 
                heading="Heading"
                src="./images/photo1.jpg"
                para="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and " 
            />

            <Section 
                heading="Heading"
                src="./images/photo1.jpg"
                para="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and " 
            />
            
        </div>
        <div className="side-right-sec">
            <Section 
                heading="Heading"
                src="./images/photo1.jpg"
                para="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and " 
            />

            <Section 
                heading="Heading"
                src="./images/photo1.jpg"
                para="lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and " 
            />
        </div>
    </div>);
}

export default AllSections;