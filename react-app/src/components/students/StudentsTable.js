import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setView, setCurrentStudentId } from './actions';
import { setUserCardMode } from '../../store/actions/ui'
import { makeStyles } from '@material-ui/core/styles';
import StudentTable from '../modularComponents/SortingTable';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // maxWidth: 700,
    // width: '100%',
    margin: `auto`,
    width: '50%',
    position: 'relative'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  toolbar: theme.mixins.toolbar,
  fab: {
    position: 'absolute',
    bottom: theme.spacing(-7),
    right: theme.spacing(-6),
  }
}));

function Students({ studentsById }) {
  const classes = useStyles();
  const [ currentStudentId, setCurrentStudentId ] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
  }, [studentsById]);

  if (!studentsById) return null


  const handleClick = (event, id) => {
    dispatch(setCurrentStudentId(id))
    dispatch(setView('student'))
    // history.push(`students/${id}`)
  };

  const onCreate = () => {
    (async() => {
      await dispatch(setUserCardMode('create'))
      await dispatch(setView('student'))
    })()

  }
  return (
    // <div className={classes.toolbar} >

      // <div className={classes.root}>
      <>
        <StudentTable
          type={'students'}
          byId={studentsById}
          className={classes.paper}
        />
      </>
    // </div>
  );
}

export default Students;
