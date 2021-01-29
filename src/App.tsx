import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageIndex from './app/page-index/page-index-view/page-index-view';
import PageNotFound from './app/page-not-found/page-not-found-view/page-not-found-view';
import AppContext from './AppContext';
import LinkTheme from './ui/link-theme/link-theme';

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
        <Router>
          <main>

            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <LinkTheme href="/hbjh" text="404" />
            </div>
          </main>
          <Route path="/" exact component={PageIndex} />
          <Route path="/page-not-found" component={PageNotFound} />
        </Router>
      </AppContext.Provider>
  );
}

export default AppRouter;
