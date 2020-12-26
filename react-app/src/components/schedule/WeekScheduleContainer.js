import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WeekSchedule from './WeekSchedule';
import { getWeekData } from './actions';
import { getMonth, getYear, getDate } from 'date-fns';



export default function WeekScheduleContainer(){

  const id = useSelector((state) => state.user.id)
  const byId = useSelector(state =>state.schedule.byId)
  const byDay = useSelector(state =>state.schedule.byDay)
  const calendarWeek = useSelector(state =>state.schedule.calendarWeek)
  let currentDate = useSelector(state => state.schedule.currentDate)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(getWeekData(id, getYear(currentDate), getMonth(currentDate), getDate(currentDate)))
    })();
  }, [currentDate]);

  if (!calendarWeek) return null


  return (
    <WeekSchedule
      byId={byId}
      byDay={byDay}
      currentDate={currentDate}
      calendarWeek={calendarWeek}
    />
  )

}
