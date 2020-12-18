import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const user = useSelector(state => state.user)
  console.log('user', user)

  if (props.authenticated && user.type === "adults") {
    return <Redirect to={`/students/${user.id}`} />
  } else if (props.authenticated && user.type === "instructors") {
    return <Redirect to={`/instructors/${user.id}`} />
  }

  return (
    <Route {...props}/>
  );
};

export default PrivateRoute;
