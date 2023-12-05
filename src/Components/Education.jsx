import React from "react";


const Education = () => {

    const sectionStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh' 
    };


    const gridContainerStyle = {
        display: 'grid',
        gap: '10px'
    };

    const gridItemStyle = {
        border: '1px solid black',
        padding: '10px'
    };
    return(
        <section className="light" id="education" style={sectionStyle}>
            <h2>Education</h2>
            <div className="grid-container" style={gridContainerStyle}>

                <div className="grid-item" style={gridItemStyle}>Federal University of Technology, Minna, Niger State, Nigeria</div>

              

            </div>
        </section>
    )
}

export default Education;
/*create grid of 2 cells*/
