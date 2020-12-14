import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch, useParams } from 'react-router-dom'
import { getInstructor } from '../store/actions/instructorActions'
import Navbar from './NavBar';
import StudentScheduleContainer from './schedule/StudentScheduleContainer'
import { getMonthDataStudent } from './schedule/actions'
import { format, getMonth, getYear } from 'date-fns';


const StudentApp = ({ setAuthenticated, authenticated }) => {
  const type = useSelector(state => state.user.type)
  const instructorId = useSelector((state) => state.user.instructorId)
  const instructor = useSelector((state) => state.instructor)
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInstructor(instructorId))
  }, [])

  if (!authenticated) {
    return <Redirect to="/" />
  }
  if (authenticated && type === 'instructors') {
    return <Redirect to={`/instructors/${instructorId}`} />
  }

  return (
    <BrowserRouter basename={`/students/${user.id}`}>
      <Navbar
        setAuthenticated={setAuthenticated}
        studioName={instructor.studioName}
        studioLogoUrl={instructor.studioLogoUrl}
        user={user}
      />
      <Switch>
        <Route path="/:id/schedule">
          <StudentScheduleContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


export default function StudentAppContainer({ authenticated, setAuthenticated }) {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [currentDate] = useState(new Date())



  useEffect(() => {
    (async () => {
      await dispatch(getMonthDataStudent(id, getYear(currentDate), getMonth(currentDate)))
    })();
  }, [currentDate]);



  return (
    <StudentApp
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
    />
  )

}
