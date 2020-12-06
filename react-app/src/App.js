import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import InstructorRoutes from './components/InstructorRoutes';
import StudentRoutes from './components/StudentRoutes'
import Splash from "./components/Splash"
import { authenticate } from "./services/auth";
import { loadUser } from './store/actions/authActions';
import InstructorApp from "./components/InstructorApp";
import StudentApp from './components/StudentApp';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  let type;

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (user && !user.errors) {
        setAuthenticated(true);
      }
      const userId = localStorage.getItem("user_id");
      (async () => {
        await dispatch(loadUser(userId));
        setLoaded(true);
      })()

      if (authenticated) {
        type = user.type
      }
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  if (authenticated && type === "adults") {
    return <Redirect to={`/students`} />
  } else if (authenticated && type === "instructors") {
    return <Redirect to={`/${type}`} />
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Splash authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/login/:type" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup/:type" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
      <Route path="/instructors" >
        <InstructorApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/students" >
        <StudentApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </BrowserRouter>
  )
}

export default App;
