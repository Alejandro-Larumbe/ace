import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const user = useSelector(state => state.user)

  if (props.authenticated && user.type === "adults") {
    return <Redirect to={`/students/${user.id}/schedule`} />
  } else if (props.authenticated && user.type === "instructors") {
    return <Redirect to={`/instructors/${user.id}/schedule`} />
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;
