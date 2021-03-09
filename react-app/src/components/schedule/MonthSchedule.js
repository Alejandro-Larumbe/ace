import React from 'react';
import { useDispatch } from 'react-redux';
import Tile from './Tile';
import { weekDays } from './calendarRows';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { format } from 'date-fns';



const useStyles = makeStyles((theme) => ({

  title: {
    colSpan: 2,
  },
  icons: {
    fontSize: '.7em'
  }
}))



export default function MonthSchedule( props ) {
  const { byId, byDay, currentDate, calendarMonth: tableRows, setSelectedDate, handleOpen, setLessonId } = props
  // const [open, setOpen] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch()

  if (!byId) return null


  return (
    <div>
      {/* <Lesson
        open={open}
        handleClose={handleClose}
      /> */}
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
                    // const date = new Date(each)
                    let data = []
                    const day = format(new Date(each), 'd')

                    if (byDay[date]) {
                      byDay[date].forEach(each => {
                        const time = format(new Date(byId[each]['startTime']), 'p')
                        data.push({
                          dateObject: byId[each]['startTime'],
                          time,
                          'name': byId[each].studentFirstName,
                          'lastNameInitial': byId[each].studentLastName.slice(0, 1),
                          'id': byId[each].id
                        })
                      })
                    }
                    data.sort((a, b) => (a.dateObject) > (b.dateObject) ? 1 : -1)
                    return (
                      <td key={i}>
                        <Tile setSelectedDate={setSelectedDate} handleOpen={handleOpen} date={date} day={day} setLessonId={setLessonId} data={data}></Tile>
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
