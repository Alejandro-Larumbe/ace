import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Splash from "./components/Splash"
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar setAuthenticated={setAuthenticated} /> */}
      <Switch>
        <Route path="/" exact={true}>
          <Splash authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/login/students" e¡xact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            type={'adults'}
          />
        </Route>
        {/* <Route path="/login/instructors" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            type={'instructors'}
          />
        </Route> */}
        <Route path="/signup/instructors" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            type={'instructors'}
          />
        </Route>
        <Route path="/signup/students" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            instructorId={1}
            type={'adults'}
          />
        </Route>
      </Switch>
    </BrowserRouter>

    /* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
      <UsersList/>
    </ProtectedRoute>
    <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
      <User />
    </ProtectedRoute> */
  );
}

export default App;
