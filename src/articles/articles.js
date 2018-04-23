import React from 'react';
import Header from '../pageLayout/header';

const Articles = () => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Articles"} 
                jpnCategory={"記事"} 
                icon={<i className="fas fa-book"></i>}
            />    
        </div>
    );
};

export default Articles;