import React from 'react';

export default function LessonCreateContainer({ id }) {
  const lesson = useSelector(state=> state.schedule.byId[id])

  return (
    <h1></h1>
  )
}
