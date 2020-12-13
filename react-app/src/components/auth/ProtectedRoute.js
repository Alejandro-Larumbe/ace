import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  // const type = useSelector()

  if (!props.authenticated) {
    return <Redirect to="/"/>
  } else if (props.authenticated && props.type === "adults") {
    return <Redirect to={`/students`} />
  } else if (props.authenticated && props.type === "instructors") {
    return <Redirect to={'/instructors'} />
  }

  return (
    <Route {...props}/>
  );
};

export default ProtectedRoute;
