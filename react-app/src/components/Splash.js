import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'


const Splash = () => {
  let history = useHistory();


  const handleSignUpStudent = () => {
    history.push('/signup/students')
  };

  const handleSignUpInstructor = () => {
    history.push('/signup/instructors')
  };
  const handleLoginStudent = () => {
    history.push('/login/students')
  };
  const handleLoginInstructor = () => {
    history.push('/login/instructors')
  };


return (

<>
  <Button onClick={handleSignUpStudent}
  >
    SignUp Student
  </Button>
  <Button onClick={handleSignUpInstructor}
  >
    Signup Instructor
  </Button>
  <Button onClick={handleLoginStudent}
  >
    Login Student
  </Button>
  <Button onClick={handleLoginInstructor}
  >
    Login Instructor
  </Button>
</>
)}

export default Splash
