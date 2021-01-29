import React from 'react';

const AppContext = React.createContext({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
});

export default AppContext;
