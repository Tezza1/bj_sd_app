import React from 'react';
import Header from '../pageLayout/header';

const Brochures = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Brochures"}
                jpnCategory={"パンフレット"}
                icon={<i className="fas fa-comments"></i>}
            />   
        </div>
    );
};

export default Brochures;