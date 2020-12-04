import React from 'react'
import Button from '@material-ui/core/Button'
import SignUpForm from './auth/SignUpForm';


const Splash = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

return (

<>
  <Button onClick={handleClickOpen}
  >
    SignUp Student
  </Button>
  <Button onClick={handleClickOpen}
  >
    Signup Instructor
  </Button>
  <SignUpForm
    open={open}
    onClose={handleClose}
    type={'adults'}
  />
  <SignUpForm
    open={open}
    onClose={handleClose}
    instructorId={1}
    type={'instructors'}
    {...props}
  />

</>
)}

export default Splash
