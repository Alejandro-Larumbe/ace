import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import Splash from "./components/splash/Splash"
import { authenticate } from "./services/auth";
import { loadUser } from './store/actions/authActions';
import InstructorApp from "./components/InstructorApp";
import StudentApp from './components/StudentApp';
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [ type, setType ] = useState();
  const dispatch = useDispatch();

  // debugger;
  useEffect(() => {
    let user;
    (async () => {

      const userId = localStorage.getItem("user_id");
      if (userId) {
        user = await authenticate();
        if (!user.errors) {
          setAuthenticated(true);
        }

        (async () => {
          await dispatch(loadUser(userId));
          setLoaded(true);
          setType(user.type)
        })()
      } else {
        setLoaded(true);
      }
    })();
  }, [dispatch, setAuthenticated]);

  if (!loaded) {
    return null;
  }

  // if (authenticated && type === "adults") {
  //   return <Redirect to={`/students`} />
  // } else if (authenticated && type === "instructors") {
  //   return <Redirect to={`/${type}`} />
  // }
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" authenticated={authenticated} exact={true}>
          <Splash setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <Route path="/signup" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            route={type}
          />
        </Route>
      </Switch>
      <Route path="/instructors/:id" >
        <InstructorApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/students/:id" >
        <StudentApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </BrowserRouter>
  )
}

export default App;
