import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Schedule from './Schedule';
import { getMonthData } from './actions';
import { format, getMonth, getYear } from 'date-fns';



export default function ScheduleContainer() {
  const byId = useSelector(state => state.schedule.byId)
  const byDay = useSelector(state => state.schedule.byDay)
  const currentDate = useSelector(state => state.schedule.currentDate)


  useEffect(() => {
    dispatch(setCurrentDate(new Date()))
  }, []);



  return (
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
  )
}
