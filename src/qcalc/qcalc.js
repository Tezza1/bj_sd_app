import React from 'react';
import Header from '../pageLayout/header';

const Qcalc = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"QikCalc"} 
                jpnCategory={"クイック計算"} 
                icon={<i className="fas fa-cart-plus"></i>}
            />    
        </div>
    );
};

export default Qcalc;