import React from 'react';
import Header from '../pageLayout/header';

const Proposals = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Proposals"} 
                jpnCategory={"提案"} 
                icon={<i className="fas fa-pencil-alt"></i>}
            />    
        </div>
    );
};

export default Proposals;