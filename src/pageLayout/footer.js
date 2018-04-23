import React from 'react';

const Footer = () => {
    return(
        <div className="pure-menu pure-menu-horizontal footer">
            <a href="/" className="pure-menu-heading pure-menu-link">
                <img className="navbar-brand" src={require('../Images/Berlitz_logo.png')} alt="Logo" style={{width: 120,}}></img>
            </a>
            
            <ul className="pure-menu-list language-option">
                <li className="pure-menu-item">
                    <a href="http://www.berlitz.co.jp/" className="pure-menu-link"><i className="fas fa-home"></i></a>
                </li>
                <li className="pure-menu-item">
                    <a href="https://www.facebook.com/BerlitzJapan/" className="pure-menu-link"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li className="pure-menu-item">
                    <a href="https://twitter.com/berlitz_japan" className="pure-menu-link"><i className="fab fa-twitter-square"></i></a>
                </li>
                <li className="pure-menu-item">
                    <a href="https://www.linkedin.com/company/berlitz-corporation/?originalSubdomain=jp" className="pure-menu-link"><i className="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;