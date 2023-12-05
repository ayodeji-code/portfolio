import React from "react";


const Education = () => {
    const gridContainerStyle = {
        display: 'grid',
        gap: '10px'
    };

    const gridItemStyle = {
        border: '1px solid black',
        padding: '10px'
    };
    return(
        <section className="light" id="education">
            <h2>Education</h2>
            <div className="grid-container" style={gridContainerStyle}>
                <div className="grid-item" style={gridItemStyle}>Federal UNiversity of Technology, Minna.</div>
            </div>
        </section>
    )
}

export default Education;
/*create grid of 2 cells*/
