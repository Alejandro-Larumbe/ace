import React from 'react';
import { weekDays } from './calendarRows';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';



export default function WeekSchedule({ byId, byDay, currentDate, calendarWeek }) {
  // console.log(byId, byDay, currentDate, calendarWeek)
  return (
    <div>
      <CssBaseline />
      <table>
        <thead>
          <tr>
            {calendarWeek.map((day, i) => {
              const split = day.split('-')
              return <th key={i}>
                <Typography>{weekDays[i]}</Typography>
                <Typography>{split[split.length - 1]}</Typography>
              </th>
            }
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            {calendarWeek.map((each, i) => {
              const day = byDay[calendarWeek[i]]
              if (day) {
                return (
                  <List>
                    {day.forEach(each => {
                      each = byId[each]
                      return (
                        <ListItem key={i}>
                          <ListItemText primary={`${each.studentFirstName} ${each.studentLastName}`} />
                        </ListItem>
                      )
                    })}
                  </List>
                )
              }
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )

}
