import React from 'react';
import { useSelector } from 'react-redux';
import LessonEdit from './EditLesson';



const LessonEditContainer = (props) => {
  const lesson = useSelector(state => state.schedule.byId[props.id])

  return (
    <LessonEdit
      {...props}
      lesson={lesson}
    />
  )

}

export default LessonEditContainer;
