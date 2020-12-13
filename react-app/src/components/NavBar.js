import React, { useState } from 'react';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
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
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album'; import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Link from '@material-ui/core/Link';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

}));


const NavBar = ({ setAuthenticated, profilePicUrl, studioName, studioLogo, type, id }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const route = type === "instuctors" ? "instructors" : "students"
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEditProfile = () => {
    history.push(`/${id}/edit-profile`)
    setAnchorEl(null);
  };

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    // return <Redirect to={`/`} />
  };



  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Grid container spacing={3} alignItems="center" justify="space-between">
          <Grid item xs={3}>

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
              <Avatar alt="Remy Sharp" src={profilePicUrl}
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
                <MenuItem onClick={onEditProfile}>Profile</MenuItem>
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
        <div className={classes.toolbar} >
          <div edge="start" className={classes.menuButton}>
            <img src={studioLogo} height={"100px"}></img>
          </div>
          {type === 'instructors'
            ?
            <NavLink to={`/${id}/students`}>
              <List >
                <ListItemIcon><FaceIcon /></ListItemIcon>
                <ListItemText>Students</ListItemText>
              </List>
            </NavLink>
            : null
          }
          <NavLink to={`/${id}/schedule`}>
            <List >
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText>Schedule</ListItemText>
            </List>
          </NavLink>
          <NavLink to={`/${id}/lesson-create`}>
            <List>
              <ListItemIcon><MusicNoteIcon /></ListItemIcon>
              <ListItemText>Lessons</ListItemText>
            </List>
          </NavLink>
          <NavLink to={`/${id}/repertoire`}>
            <List>
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText>Repertoire</ListItemText>
            </List>
          </NavLink>
          <NavLink to={`/${id}/resources`}>
            <List>
              <ListItemIcon><AlbumIcon /></ListItemIcon>
              <ListItemText>Resources</ListItemText>
            </List>
          </NavLink>
          <NavLink to={`/${id}/billing`}>
            <List>
              <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
              <ListItemText>Billing</ListItemText>
            </List>
          </NavLink>
        </div>


      </Drawer>

    </div >
  );
}


export default NavBar;
