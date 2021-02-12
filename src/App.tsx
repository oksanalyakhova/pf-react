import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppContext from './AppContext';

import PageIndex from './app/page-index/page-index-view/page-index-view';
import PageNotFound from './app/page-not-found/page-not-found-view/page-not-found-view';

import {createGlobalStyle} from 'styled-components';
import {theme} from './helpers/variables';
import {Normalize} from 'styled-normalize';
import './App.sass';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        outline: none;
        -webkit-appearance: none;
        -webkit-overflow-scrolling: touch;
        &:hover,
        &:active,
        &:focus {
            outline: none;
            -webkit-text-size-adjust: none;
        }
    }
    
    a {
        display: block;
        text-decoration: none;
        color: inherit;
        &:hover,
        &:visited {
            color: inherit;
        }
    }
    
    p, h1,  h2, h3, h4, h5, h6 {
        margin: 0;
    }
    
    img {
        max-width: 100%;
        border: 0;
        outline: none;
    }
    
    button {
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        &:hover,
        &:active,
        &:focus {
            outline: none;
        }
    }
    
    ul, ol, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    input, textarea {
        margin: 0;
        padding: 0;
        outline: none;
        overflow: auto;
    }

    html,
    body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: ${theme.variables.ff};
        font-weight: ${theme.variables.fRegular};
        color: ${theme.variables.cText};
        background-color: ${theme.variables.cBg};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    canvas {
      width: 100%;
    }
`;

const AppRouter = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        });
    }, []);

    const globalSettings = {
        windowWidth,
        windowHeight,
        setWindowWidth,
        setWindowHeight
    };

    return (
        <AppContext.Provider value={globalSettings}>
            <Normalize/>
            <GlobalStyle theme={theme}/>
            <Router>
                <Route path="/" exact component={PageIndex}/>
                <Route path="/page-not-found" component={PageNotFound}/>
            </Router>
        </AppContext.Provider>
    );
}

export default AppRouter;
