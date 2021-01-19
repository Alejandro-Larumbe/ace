import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from "../services/auth";
import CssBaseline from '@material-ui/core/CssBaseline';
import { setTitleView } from '../store/actions/ui';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AlbumIcon from '@material-ui/icons/Album';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const drawerWidth = 200;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  logoContainer: {
    height: '14vh',
    minHeight: '14vh',
    objectFit: 'contain',
    display: 'flex',
    justifyContent: 'center',
    // marginRight: theme.spacing(2),
    alignItems: 'center',
  },
  appbar: {
    display: 'flex',
    justifyContent: 'center',
    width: `calc(100% - ${drawerWidth}px)`,
    minHeight: '8vh',
    marginLeft: drawerWidth,
    // zIndex: theme.zIndex.drawer + 1,
    // color: theme.palette.secondary
  },
  bar2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: `calc(100% - ${drawerWidth}px)`,
    marginTop: '9vh',
    marginRight: '15px',
    background: 'none',
  },

  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  item: {
    textDecoration: 'none',
    color: 'white',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  link: {
    textDecoration: 'none'
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    paddingTop: "20px",
    paddingBottom: '20px',
  },
  avatar: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  avatar2: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: '30px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: "20vh",
    justifyContent: "space-around",
    marginLeft: '100px'

  },
  logo: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 1300,
  }
}));


const NavBar = ({ setAuthenticated, user, studioName, studioLogoUrl }) => {
  const { profilePicUrl, type, id, firstName } = user
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const open = Boolean(anchorEl);
  const route = type === "instuctors" ? "instructors" : "students"
  const titleView = useSelector(state => state.ui.titleView)
  const dispatch = useDispatch();





  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onProfile = () => {
    history.push(`/${id}`)
    setAnchorEl(null);
  };

  const onLogout = async (e) => {

    await logout();
    setAuthenticated(false);
    return <Redirect to={`/`} />
  };



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} color={'secondary'} position="fixed">
        <Toolbar>
          <Typography variant="h4" noWrap className={classes.title}>
            {studioName}
          </Typography>
          <MenuIcon
            className={classes.menuIcon}
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            fontSize={'large'}

          />
          {/* <Avatar alt="Remy Sharp" src={profilePicUrl}
              >
            </Avatar> */}
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
            <MenuItem onClick={onProfile}>Profile</MenuItem>
            <MenuItem onClick={onLogout}>log out</MenuItem>
          </Menu>

        </Toolbar>
      </AppBar>
      <AppBar className={classes.bar2} elevation={0} color="transparent">
        {
        titleView === 'students' &&

          <h1>{`Welcome ${firstName}`}</h1>
        }
         {
          titleView === 'schedule' &&
          <h1>schedule</h1>
        }
         {
          titleView === 'lessonTasks' &&
          <h1>lessons</h1>
        } {

          titleView === 'repertoire' &&

          <h1>repertoire</h1>
        }
        {
          titleView === 'resources' &&

          <h1>resources</h1>
        }

        <Avatar className={classes.avatar2} src={profilePicUrl}></Avatar>
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
          <div className={classes.logoContainer}>
            <Avatar alt="Studio Logo" className={classes.avatar} src={studioLogoUrl}
            >
            </Avatar>
          </div>
          {/* <Divider /> */}
          <List >
              <ListItem component={NavLink} onClick={() => dispatch(setTitleView('students'))} to={`/students`} className={classes.listItem} button>
                <ListItemIcon><FaceIcon /></ListItemIcon>
                <ListItemText>Students</ListItemText>
              </ListItem>
            <ListItem onClick={() => dispatch(setTitleView('schedule'))} component={NavLink} to={`/schedule`} className={classes.listItem} button>
              <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
              <ListItemText>Schedule</ListItemText>
            </ListItem>
            <ListItem component={NavLink} to={`/lessons`} className={classes.listItem} button>
              <ListItemIcon><FormatListBulletedIcon/></ListItemIcon>
              <ListItemText>Lesson Tasks</ListItemText>
            </ListItem>
            <ListItem to={'/repertoire'} onClick={() => dispatch(setTitleView('repertoire'))} component={NavLink} className={classes.listItem} button>
              <ListItemIcon><MusicNoteIcon /></ListItemIcon>
              <ListItemText>Repertoire</ListItemText>
            </ListItem>
            <ListItem to={`/resources`} onClick={() => dispatch(setTitleView('resources'))} component={NavLink} className={classes.listItem} button>
              <ListItemIcon><AlbumIcon /></ListItemIcon>
              <ListItemText>Resources</ListItemText>
            </ListItem>
            {/* <ListItem component={NavLink} to={`/billing`} className={classes.listItem} button>
              <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
              <ListItemText>Billing</ListItemText>
            </ListItem> */}
          </List>
        </div>
      </Drawer>
      <div className={classes.logo}>
        <img src={'https://ace-management.s3.us-east-2.amazonaws.com/yellow.png'} height={"30px"} />
      </div>
    </div >
  );
}


export default NavBar;
