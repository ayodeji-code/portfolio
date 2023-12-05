import React from "react";


const Education = () => {

    const sectionStyle = {
        width: '50%',


    const sectionStyle = {
        width: '700px',
 main
        margin: 'auto',
        alignItems: 'center',
        height: '100vh' 
    };


 

 main
    const gridContainerStyle = {
        display: 'grid',
        gap: '10px'
    };

    const gridItemStyle = {

        padding: '17px'


        padding: '15px'
 main
    };
    const educationHeader = {
        textAlign: 'center'    
    };
    return(
        <section className="light" id="education" style={sectionStyle}>
            <h2 id="educationHeader" style={educationHeader}>Education</h2>
            <div className="grid-container" style={gridContainerStyle}>
                <div className="grid-item" style={gridItemStyle}>Federal University of Technology, Minna, Niger State, Nigeria</div>



        border: '1px solid black',
        padding: '10px'
    };
    return(
        <section className="light" id="education" style={sectionStyle}>
            <h2>Education</h2>
            <div className="grid-container" style={gridContainerStyle}>

                <div className="grid-item" style={gridItemStyle}>Federal University of Technology, Minna, Niger State, Nigeria</div>

              


 main
            </div>
        </section>
    )
}

export default Education;
/*create grid of 2 cells*/
