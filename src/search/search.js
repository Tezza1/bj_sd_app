import React from 'react';
import Header from '../pageLayout/header';

const Search = (props) => {
    return(
        <div style={{marginTop: "2em", paddingTop: "2em"}}>
            <Header 
                engCategory={"Search"} 
                jpnCategory={"サーチ"} 
                icon={<i className="fas fa-search"></i>}
            />    
        </div>
    );
};

export default Search;