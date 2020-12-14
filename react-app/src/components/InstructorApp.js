import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom';
import Navbar from './NavBar';
import Students from './students/Students';
import User from './user/User.js';
import UserEdit from './user/UserEdit';
import LessonCreate from '../components/lessons/LessonCreate'
import ScheduleContainer from '../components/schedule/ScheduleContainer';
import DayContainer from './day/ScheduleDayContainer'
import { getMonthData } from './schedule/actions'
import { format, getMonth, getYear } from 'date-fns';
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'


const InstructorApp = ({ authenticated, setAuthenticated }) => {
  const user = useSelector((state) => state.user)



  return (
    <BrowserRouter basename={'/instructors/'}>
      <Navbar
        setAuthenticated={setAuthenticated}
        user={user}
        studioName={user.studioName}
        studioLogoUrl={user.studioLogoUrl}
      />
      <Switch>
        <Route path="/:instructorId/students/:id/edit">
          <UserEdit />
        </Route>
        <Route path="/:instructorId/students/:id">
          <User />
        </Route>
        <Route path="/:instructorId/students" >
          <Students />
        </Route>
        <Route path="/:id/lesson-create" >
          <LessonCreate />
        </Route>
        <Route path="/:instructorId/schedule">
          <ScheduleContainer />
        </Route>
        <Route path="/:instructorId/day/:day">
          <DayContainer />
        </Route>
        <Route path="/:id/edit" >
          <EditProfile />
        </Route>
        <Route path="/:id" >
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}

export default function AppContainer({ authenticated, setAuthenticated }) {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [currentDate] = useState(new Date())



  useEffect(() => {
    (async () => {
      await dispatch(getMonthData(id, getYear(currentDate), getMonth(currentDate)))
    })();
  }, [currentDate]);


    if (!authenticated) {
      return <Redirect to="/" />
    }
    if (authenticated && user.type === 'adults') {
      return <Redirect to="/students" />
    }

  return (
    <InstructorApp
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  )

}
