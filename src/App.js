import React, { useEffect, useState } from "react";
import useAuth from "./services/firebase/useAuth";
import { Switch, Route, useLocation, useHistory, Redirect, } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./config/globalStyles";
import theme from "./config/theme.js";
import Login from "./Views/Login";

import Home from "./Views/Home";
import Join from "./Views/Join";
import Timer from "./Views/Timer";
import Todo from "./Views/Todo";
import Calendar from "./Views/Calendar";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebaseConfig";
import HeaderMenu from "./Components/Menu";

function Protected({ authenticated, children, ...rest }) {

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const app = initializeApp(firebaseConfig);

  const { isAuthenticated, createEmailUser, signInEmailUser, signUserOut } =
    useAuth();

  useEffect(() => {

    if (isAuthenticated) {
      history.push(history.location.state.from.pathname);
    }
    return;
  }, [isAuthenticated]);

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
        {location.pathname !== "/join" && location.pathname !== "/login" && (
          <HeaderMenu onClick={handleClick} open={menuOpen} signOut={signUserOut} />
        )}
        <GlobalStyles />
        <div
          onClick={handleOuterWrapperClick}
          style={{ width: "100vw", height: "100vh" }}
        >
          <Switch>
            <Protected authenticated={isAuthenticated} exact path="/">
              <Home />
            </Protected>
            <Route path="/login">
              <Login signInEmailUser={signInEmailUser} />
            </Route>
            <Route path="/join">
              <Join createEmailUser={createEmailUser} />
            </Route>
            <Protected authenticated={isAuthenticated} path="/todo">
              <Todo />
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/timer">
              <Timer />
            </Protected>
            <Protected authenticated={isAuthenticated} exact path="/calendar">
              <Calendar />
            </Protected>
          </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
