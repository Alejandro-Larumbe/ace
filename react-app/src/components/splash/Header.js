import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Button, AppBar, Toolbar, Collapse } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100vh",
    textAlign: 'center'
  },
  appBar: {
    background: 'none',
  },
  barIcon: {
    display: 'flex',
    justify: 'space-between',
    flexGrow: '1',
  },
  button: {
    marginLeft: '10px',
    color: '#FAC637',
    padding: '10px',
    fontSize: '1em',
    backgroundColor: 'rgba(0,0,0,0.4)'

    // background: 'grey',
  },
  title: {
    color: 'white',
    fontSize: '3rem',
    flexGrow: '1',

  },
  goDown: {
    color: '#FAC637',
    fontSize: '7rem',
    // alignItem: "flex-end"

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: "130vh",
    justifyContent: "space-around",
    marginLeft: '100px'

  }

}))

export default function Header({ handleOpen }) {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    setChecked(true)
  })


  const handleSignUp = () => {
    history.push('/signup')
  };


  return (

    <div className={classes.root} id='header'>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <div className={classes.barIcon}>
            <img src={'https://ace-management.s3.us-east-2.amazonaws.com/purplecircle5.png'} height={"100px"} />
          </div>
          <div>
            <Button size="large" className={classes.button} onClick={handleOpen}>
              Login
            </Button>
            <Button size="large" className={classes.button} onClick={handleSignUp}
            >
              Signup
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <div>
            <h1 className={classes.title}>Welcome to <br />
              <img src={'https://ace-management.s3.us-east-2.amazonaws.com/yellow.png'} height={"130px"} />
            </h1>
          </div>
          <div>
            <Scroll to="description" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </div>
      </Collapse>
    </div>
  )
}
