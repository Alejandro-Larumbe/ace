import React from 'react';
import { useDispatch } from 'react-redux';
import Tile from './Tile';
import { weekDays } from './calendarRows';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { format, addMonths, subMonths } from 'date-fns';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { setCurrentDate } from './actions';


const useStyles = makeStyles((theme) => ({

  title: {
    colSpan: 2,
  },
  icons: {
    fontSize: '.7em'
  }
}))



export default function MonthSchedule({ byId, byDay, currentDate, calendarMonth:tableRows }) {
  const classes = useStyles();
  const dispatch = useDispatch()

  if (!byId) return null

  return (
    <div>
      <CssBaseline />
      <table>
        <thead>
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
                  row.map((each, i) => {
                    const date = format(new Date(each), 'yyyy-MM-dd')
                    let data = []
                    const day = format(new Date(each), 'd')
                    // console.log('data day--------', byDay[date])

                    if (byDay[date]) {
                      byDay[date].forEach(each => {
                        // console.log('byEd eacn-----------', byId[each]['startTime'])
                        const time = format(new Date(byId[each]['startTime']), 'p')
                        data.push({
                          time,
                          'name': byId[each].studentFirstName,
                          'lastNameInitial': byId[each].studentLastName.slice(0, 1)
                        })
                      })
                    }
                    data.sort((a, b) => (a.time > b.time) ? 1 : -1)
                    return (
                      <td key={i}>
                        <Tile date={date} day={day} data={data}></Tile>
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
