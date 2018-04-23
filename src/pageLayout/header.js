import React from 'react';

const Header = (props) => {
    
    const styles = {
        color: "#2d3e50",
        marginTop: "1em",
        textAlign: "center"
    };
    
    return(
        <div>
            <h1 style={styles}>
                <span style={{marginRight: "1em", fontSize:"90%"}}>{props.icon}</span>
                <span className="eng-lang">{props.engCategory}</span>
            </h1>
            <hr />
 
        </div>
    );
};

export default Header;