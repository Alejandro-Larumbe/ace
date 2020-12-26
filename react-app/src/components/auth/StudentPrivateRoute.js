import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const InstructorPrivateRoute = props => {
  const user = useSelector(state => state.user)

  if (props.authenticated && user.type === "instructors") {
    return <Redirect to={`/instructors/${user.id}`} />
  } else if (!props.authenticated) return <Redirect to={'/'} />


  return (
    <Route {...props}/>
  );

};

export default InstructorPrivateRoute;
