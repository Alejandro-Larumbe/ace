import React from 'react';
import Tile from './Tile';
import { calendarRows, weekDays } from './calendarRows';
import Typography from '@material-ui/core/Typography';


const style = {
  margin: 'auto',
  marginTop: 100,
  maxWidth: 700,
}



export default function Schedule() {
  const tableRows = calendarRows(new Date())

  return (
    <div style={style} class>
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
              {row.map(cell => {
                return <td>
                    <Tile id={cell}></Tile>
                  </td>
              })}
            </tr>
          )
        })}
      </table>
    </div>
  )
}
