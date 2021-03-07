import React from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import Students from './students/StudentsContainer';
import Schedule from './schedule/Schedule';
import Resources from './resources/ResourcesContainer';
import Repertoire from './repertoire/Repertoire';
import Lesson from './tasks/TasksContainer';
const style = {
  marginTop: '22vh',
  marginLeft: 200
};

export default function InstructorApp({ setAuthenticated }) {
  const user = useSelector((state) => state.user)
  return (
    <BrowserRouter basename={'/instructors'}>
      <Navbar
        setAuthenticated={setAuthenticated}
        user={user}
        studioName={user.studioName}
        studioLogoUrl={user.studioLogoUrl}
      />
      <div style={style}>
        <Switch>
          <Route path="/students" >
            <Students />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/lessons">
            <Lesson />
          </Route>
          <Route path="/repertoire">
            <Repertoire />
          </Route>
          {/* <Route path="/:id" >
            <Profile />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}
