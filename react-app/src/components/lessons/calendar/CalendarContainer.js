import React from 'react';
import Calendar from './Calendar';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';




export default function CalendarContainer() {
  const monthLessons = (store) => useSelector(store.lessons.month.byId)
  const dateNow = (format(new Date(), 'yyyy-MM-dd HH:mm:ss'));




  return (
    <Calendar/>
  )
}
