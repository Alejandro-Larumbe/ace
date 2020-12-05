import React from 'react';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const StudentApp = props => {
  const type = useSelector(state => state.user.type)

  if (!props.authenticated) {
    return <Redirect to="/"/>
  }
  if (props.authenticated && type === 'instructors') {
    return <Redirect to="/instructors"/>
  }

  return (
    <Route {...props}/>
  );
};

export default StudentApp;
