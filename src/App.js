import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import Login from "./Views/Login";

import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Profile from "./Views/Profile";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (e) => {
    setMenuOpen(!menuOpen);
  };

  const handleOuterWrapperClick = (e) => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        {location.pathname !== "/join" && (
          <Header onClick={handleClick} open={menuOpen} />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Switch>
            <Route exact path="/">
              <Dash />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">

            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
