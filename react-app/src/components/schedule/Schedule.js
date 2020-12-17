import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import { calendarRows, weekDays } from './calendarRows';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { format, getMonth, getYear, addMonths, subMonths } from 'date-fns';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: '20vh',
    maxWidth: 700,
  },
  title: {
    colSpan: 2,
  },
  icons: {
    fontSize: '.7em'
  }
}))



export default function Schedule({ byId, dayArray, setCurrentDate, currentDate }) {
  const classes = useStyles();
  // const [ date, setDate ] = useState(new Date ())
  useEffect(() => {
  }, []);

  if (!byId) return null

  const monthHandler = (value) => {
    if (value === 'next') {
      setCurrentDate(addMonths(currentDate, 1))
    } else if (value === 'prev') {
      setCurrentDate(subMonths(currentDate, 1))
    }
  }

  const tableRows = calendarRows(currentDate)

  return (
    <div className={classes.root}>
      <CssBaseline />
      <table>
        <thead>
          <tr>
            <td colSpan={4}>
              <Typography variant={'h3'} gutterBottom={true}>
                <IconButton onClick={() => monthHandler('prev')}>
                  <ArrowBackIosIcon className={classes.icons} />
                </IconButton>
                <IconButton onClick={() => monthHandler('next')}>
                  <ArrowForwardIosIcon className={classes.icons} />
                </IconButton> {format((currentDate), 'MMMM')} {format((currentDate), 'yyyy')}
              </Typography>
            </td>
          </tr>
          <tr>
            {weekDays.map(week => {
              return <th key={week}><Typography>{week}</Typography></th>
            }
            )}
          </tr>
        </thead>
        <tbody>

          {tableRows.map((row, i) => {
            return (
              <tr key={i}>
                {
                  row.map((day, i) => {
                    let data = []

                    if (dayArray[day]) {
                      dayArray[day].forEach(each => {
                        const time = format(new Date(byId[each]['start_time']), 'p')
                        data.push({
                          time,
                          'name': byId[each].student_first_name,
                          'lastNameInitial': byId[each].student_last_name.slice(0, 1)
                        })
                      })
                    }
                    data.sort((a, b) => (a.time > b.time) ? 1 : -1)
                    return (
                      <td key={i}>
                        <Tile day={i} currentDate={currentDate} data={data}></Tile>
                      </td>
                    )

                  })
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
