import React, { Component } from 'react';
import './App.css';
import Navigation from './pageLayout/navigation';
import Footer from './pageLayout/footer';
import Home from './home/home';
import {Route} from 'react-router-dom';
import Portfolio from './portfolio/portfolio';
import Paths from './paths/paths';
import Samples from './samples/samples';
import Brochures from './brochures/brochures';
import Proposals from './proposals/proposals';
import Articles from './articles/articles';
import Visits from './visits/visits';
import Qcalc from './qcalc/qcalc';
import Search from './search/search'

// Yahoo Pure 
require('purecss');

class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Route exact path = "/" render={() => (
                    <Home />
                )}/>
                <Route path= "/portfolio" render = {({history}) => (
                    <Portfolio />
                )}/>
                <Route path= "/paths" render = {({history}) => (
                    <Paths />
                )}/>
                <Route path= "/samples" render = {({history}) => (
                    <Samples />
                )}/>
                <Route path= "/brochures" render = {({history}) => (
                    <Brochures />
                )}/>
                <Route path= "/proposals" render = {({history}) => (
                    <Proposals />
                )}/>
                <Route path= "/articles" render = {({history}) => (
                    <Articles />
                )}/>
                <Route path= "/visits" render = {({history}) => (
                    <Visits />
                )}/>
                <Route path= "/qcalc" render = {({history}) => (
                    <Qcalc />
                )}/>
                <Route path= "/search" render = {({history}) => (
                    <Search />
                )}/>
                <Footer />
            </div>
        );
    }
}

export default App;
