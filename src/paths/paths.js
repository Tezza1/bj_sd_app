import React from 'react';
import Header from '../pageLayout/header';

const Paths = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Learning Paths"} 
                jpnCategory={"学習経路"} 
                icon={<i className="fas fa-share-alt-square"></i>}
            />    
        </div>
    );
};

export default Paths;