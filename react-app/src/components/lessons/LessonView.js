import React from 'react'
import Typography from '@material-ui/core/Typography';
import format from 'date-fns/format'
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';


export default function LessonView(props) {
  const {
    startTime,
    endTime,
    profilePicUrl,
    studentFirstName,
    studentLastName
  } = props.lesson
  console.log('-----', profilePicUrl)

  return (
    <>
      {/* <div style={{ display: 'flex'}}> */}
      {/* <Avatar src={profilePicUrl}/> */}
      <CardHeader

      />
      <Typography>
        {format(new Date(startTime), "PPP")}
      </Typography>
      <Typography>
        {`${format(new Date(startTime), 'p')} - ${format(new Date(endTime), 'p')}`}
      </Typography>
      {/* </div> */}
    </>
  )
}
