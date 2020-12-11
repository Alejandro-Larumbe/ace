import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import { calendarRows, weekDays } from './calendarRows';
import Typography from '@material-ui/core/Typography';
import { getMonth } from './actions';
import { format, parse } from 'date-fns';


const style = {
  margin: 'auto',
  marginTop: 100,
  maxWidth: 700,
}



export default function Schedule({ byId, dayArray, setCurrentDate, currentDate }) {

  useEffect(() => {
  }, []);

  if(!byId) return null

  const tableRows = calendarRows(currentDate)

  return (
    <div style={style}>
      <table>
        <tr>
          {weekDays.map(week => {
            return <th><Typography>{week}</Typography></th>
          }
          )}
        </tr>
        {tableRows.map((row, i) => {
          return (
            <tr>
              {
                row.map(day => {
                  let data = []

                  if (dayArray[day]) {
                    dayArray[day].forEach(each => {
                      console.log(each)
                      const time = format(new Date(byId[each]['start_time']), 'p')

                      console.log(time)
                      data.push({
                        time,
                      })
                    })
                  }
                  data.sort((a, b) => (a.time > b.time) ? 1: -1)
                  return <td>
                    <Tile day={day} data={data}></Tile>
                  </td>

                })
              }
            </tr>
          )
        })}
      </table>
    </div>
  )
}
