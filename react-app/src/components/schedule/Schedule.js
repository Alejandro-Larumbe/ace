import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import MonthSchedule from './MonthScheduleContainer';
import DaySchedule from './Schedule';
import WeekSchedule from './WeekScheduleContainer';
import { setCurrentDate } from './actions';
import { setCalendarView } from '../../store/actions/ui';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { format, addMonths, subMonths } from 'date-fns';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    // border: '1px solid white',
    // flexGrow: 1,
    // maxWidth: 2000,
    margin: 'auto',
    width: '77%',
    // position: 'relative'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    flexGrow: 1,
  }
}))

export default function Schedule() {
  const dispatch = useDispatch();
  const view = useSelector(state => state.ui.calendarView)
  const classes = useStyles();
  let currentDate = useSelector(state => state.schedule.currentDate)


  useEffect(() => {
    (async() => {
      await dispatch(setCurrentDate(new Date()))
    })()
  }, [dispatch, view]);

  if (!currentDate) return null

  const dateHandler = (value) => {
    if (view === 'month') {
      if (value === 'next') {
        dispatch(setCurrentDate(addMonths(currentDate, 1)))
      } else if (value === 'prev') {
        dispatch(setCurrentDate(subMonths(currentDate, 1)))
      }
    }
  }

  const handleChange = (event) => {
    dispatch(setCalendarView(event.target.value))
  };

  console.log('view=============', view)


  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
            <div className={classes.title}>
              <Typography variant={'h3'} gutterBottom={true}>
                <IconButton onClick={() => dateHandler('prev')}>
                  <ArrowBackIosIcon className={classes.icons} />
                </IconButton>
                <IconButton onClick={() => dateHandler('next')}>
                  <ArrowForwardIosIcon className={classes.icons} />
                </IconButton>
                {format((currentDate), 'MMMM')} {format((currentDate), 'yyyy')}
              </Typography>
            </div>
          {/* <div>
            <Select
              value={view}
              onChange={handleChange}
            >
              <MenuItem value={'month'}>month</MenuItem>
              <MenuItem value={'week'}>week</MenuItem>
              <MenuItem value={'day'}>day</MenuItem>
            </Select>
          </div> */}
        </div>
        <Switch>
          {view === 'month' && (
            <MonthSchedule />
          )}
          {view === 'day' && (
            <DaySchedule />
          )}
          {view === 'week' && (
            <WeekSchedule />
          )}
        </Switch>
      </div>
    </>
  )
}
