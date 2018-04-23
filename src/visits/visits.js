import React from 'react';
import Header from '../pageLayout/header';

const Visits = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"My Client Visit"} 
                jpnCategory={"私のクライアント訪問"} 
                icon={<i className="fas fa-briefcase"></i>}/>
            />   
        </div>
    );
};

export default Visits;