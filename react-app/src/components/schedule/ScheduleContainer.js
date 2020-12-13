import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Schedule from './Schedule';
import { getMonthData } from './actions';
import { format, getMonth, getYear } from 'date-fns';



export default function ScheduleContainer() {
  const byId = useSelector(state => state.schedule.byId)
  const dayArray = useSelector(state => state.schedule.days)
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date())
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      await dispatch(getMonthData(id, getYear(currentDate), getMonth(currentDate)))
    })();
  }, [currentDate]);

  return (
    <Schedule
      byId={byId}
      dayArray={dayArray}
      currentDate={currentDate}
      setCurrentDate={setCurrentDate}
    />
  )
}
