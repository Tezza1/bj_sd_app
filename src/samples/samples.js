import React from 'react';
import Header from '../pageLayout/header';

const Samples = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Sample Materials"}
                jpnCategory={"サンプル項目"}
                icon={<i className="fas fa-cubes"></i>}
            />    
        </div>
    );
};

export default Samples;