import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MonthSchedule from './MonthSchedule';
import { getMonthData } from './actions';
import { format, getMonth, getYear } from 'date-fns';



export default function MonthScheduleContainer(){

  const id = useSelector((state) => state.user.id)
  const byId = useSelector(state =>state.schedule.byId)
  const byDay = useSelector(state =>state.schedule.byDay)
  const calendarMonth = useSelector(state =>state.schedule.calendarMonth)
  let currentDate = useSelector(state => state.schedule.currentDate)
  const view = useSelector(state => state.ui.calendarView)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(getMonthData(id, getYear(currentDate), getMonth(currentDate)))
    })();
  }, [currentDate]);

  if (view !== 'month') return null

  return (
    <MonthSchedule
      byId={byId}
      byDay={byDay}
      currentDate={currentDate}
      calendarMonth={calendarMonth}
    />
  )

}
