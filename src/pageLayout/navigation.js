import React, { Component } from 'react';

class Navigation extends Component {
    
    render() {
        return(
            <div className="pure-menu pure-menu-horizontal pure-menu-fixed home-menu">
                <a className="pure-menu-heading" href="/">
                    <img className="navbar-brand" src={require('../Images/Berlitz_logo.png')} alt="Logo" style={{width: 120,}}></img>
                </a>
    
                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="/" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="/portfolio" className="pure-menu-link">Portfolio</a></li>
                    <li className="pure-menu-item"><a href="/paths" className="pure-menu-link">Paths</a></li>
                    <li className="pure-menu-item"><a href="/samples" className="pure-menu-link">Samples</a></li>
                    <li className="pure-menu-item"><a href="/brochures" className="pure-menu-link">Brochure</a></li>
                    <li className="pure-menu-item"><a href="/proposals" className="pure-menu-link">Proposals</a></li>
                    <li className="pure-menu-item"><a href="/articles" className="pure-menu-link">Articles</a></li>
                    <li className="pure-menu-item"><a href="/visits" className="pure-menu-link">MyVisit</a></li>
                    <li className="pure-menu-item"><a href="/qcalc" className="pure-menu-link">QikCalc</a></li>
                    <li className="pure-menu-item"><a href="/search" className="pure-menu-link">Search</a></li>
                </ul>
                <ul className="pure-menu-list language-option">
                    <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                        <a href="/" className="pure-menu-link" style={{fontSize: "150%"}}><i className="fas fa-language"></i></a>
                        <ul className="pure-menu-children">
                            <li className="pure-menu-item"><a href="/" className="pure-menu-link">日本語</a></li>
                            <li className="pure-menu-item"><a href="/" className="pure-menu-link">English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }    
};

export default Navigation;