import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import Login from "./Views/Login";

import Home from "./Views/Home";
import Join from "./Views/Join";
import Timer from "./Views/Timer";
import Todo from "./Views/Todo";
import Calendar from "./Views/Calendar";


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
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/join">
              <Join />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
