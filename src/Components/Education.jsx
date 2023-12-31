import React from "react";


const Education = () => {


    const sectionStyle = {
        width: "800px",
 
        margin: "auto",
        alignItems: "center",
        height: "300px" 
    };



    const gridContainerStyle = {
        display: "grid",
        gap: "10px"
    };

    const gridItemStyle = {
        padding: "40px",
        textAlign: "center"

    };
    const educationHeader = {
        textAlign: "center"    
    };

    return(
        <section className="light" id="education" style={sectionStyle}>
            <h2 id="educationHeader" style={educationHeader}>Education</h2>
            <div className="grid-container" style={gridContainerStyle}>
                <div className="grid-item" style={gridItemStyle}>Federal University of Technology, Minna, Niger State, Nigeria.</div>

    

              
            </div>
        </section>
    )
}

export default Education;

