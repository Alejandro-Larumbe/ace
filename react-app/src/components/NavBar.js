import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from "../services/auth";

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Grid from '@material-ui/core/Grid';

import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));


const NavBar = ({ setAuthenticated, user, studioName, studioLogo }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item xs={3}>
            <div edge="start" className={classes.menuButton}>
              <img src={studioLogo} height={"100px"}></img>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Toolbar>
              <Typography variant="h6" noWrap className={classes.title}>
                {studioName}
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={3}>
            <div>
              <Avatar alt="Remy Sharp" src={user.profilePicUrl}
                className={classes.avatar}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              </Avatar>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={onLogout}>log out</MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >


      </Drawer>

    </div >
  );
}

const NavBarContainer = ({ setAuthenticated, instructor }) => {
  const user = useSelector(state => state.user);

  const studioName = (
    user.type === "instructors" ? user.studioName : instructor.studioName
  )
  const studioLogo = (
    user.type === "instructors" ? user.studioLogoUrl : instructor.studioLogoUrl
  )



  return (
    <NavBar
      setAuthenticated={setAuthenticated}
      user={user}
      studioName={studioName}
      studioLogo={studioLogo}
    />
  )
}

export default NavBarContainer;
