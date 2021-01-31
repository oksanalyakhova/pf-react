import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createGlobalStyle } from 'styled-components';
import variables from './helpers/variables';

import { Normalize } from 'styled-normalize';
import './index.sass';

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
        font-family: ${variables.ff};
        font-weight: ${variables.fRegular};
        color: ${variables.cText};
        background-color: ${variables.cBg};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

ReactDOM.render(
  <React.StrictMode>
      <Normalize />
      <GlobalStyle theme={variables} />
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
