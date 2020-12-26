import React, { useEffect, useState }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ScheduleDay from './ScheduleDay'
// import { getMonthData } from './actions';
import { useParams } from 'react-router-dom'

export default function DayContainer() {
  const { day } = useParams()
  const dayArray = useSelector(state => state.schedule.days)
  const byId = useSelector(state => state.schedule.byId)


  useEffect(() => {

  },[dayArray])

  if (!dayArray ) return null

  // console.log('---------------', dayArray[day])

  return (
    <ScheduleDay dayIds={dayArray[day]} byId={byId} />
  )
}
