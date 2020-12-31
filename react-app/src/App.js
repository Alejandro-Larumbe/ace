import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from 'react-redux';
import SignUpForm from "./components/auth/SignUpForm";
import Splash from "./components/splash/Splash"
import { authenticate } from "./services/auth";
import { loadUser } from './store/actions/authActions';
import InstructorApp from "./components/InstructorApp";
import StudentApp from './components/StudentApp';
import ProtectedRoute from './components/auth/ProtectedRoute'
import InstructorPrivateRoute from './components/auth/InstructorPrivateRoute'
import StudentPrivateRoute from './components/auth/StudentPrivateRoute'
import { setTitleView } from './store/actions/ui'

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

  return (
    <BrowserRouter>
      {/* <Switch> */}
      {/* </Switch> */}
      <InstructorPrivateRoute  authenticated={authenticated} path="/instructors" >
        <InstructorApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </InstructorPrivateRoute>
      <StudentPrivateRoute authenticated={authenticated} path="/students" >
        <StudentApp
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </StudentPrivateRoute>
      <ProtectedRoute path="/signup" authenticated={authenticated} exact={true}>
          <SignUpForm setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
        <ProtectedRoute path="/" authenticated={authenticated} >
          <Splash setAuthenticated={setAuthenticated} />
        </ProtectedRoute>
    </BrowserRouter>
  )
}

export default App;
