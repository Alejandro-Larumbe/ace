const { getMonth, getDaysInMonth, format, getDay, getYear, getWeeksInMonth, lastDayOfMonth, startOfMonth } = require('date-fns')


const date = new Date()
const thisMonth = getMonth(date)
const thisYear = getYear(date)
const daysThisMonth = getDaysInMonth(date)
const lastDayOfTheMonth = lastDayOfMonth(date)
const firstDayOfTheMonth = startOfMonth(date)
const weekDayFirstMonthDay = getDay(new Date(thisYear, thisMonth, 1))
const weekDayLastMonthDay = getDay(new Date(thisYear, thisMonth, daysThisMonth))
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const weeksInMonth = getWeeksInMonth(date)

export function calendarRows(date) {
  const month = getMonth(date)
  const year = getYear(date)
  const daysInMonth = getDaysInMonth(date)
  const weekdayFirstDayOfMonth = getDay(new Date(thisYear, thisMonth, 1))
  const weeksInMonth = getWeeksInMonth(date)

  const rows = []
  console.log(weekdayFirstDayOfMonth)
  console.log('length', rows.length)
  let i = 0;
  let j = 1
  while (i < weeksInMonth) {
    const row = []
    if (weekdayFirstDayOfMonth !== 1 && i === 0) {
      let l = 1;
      while (l < weekdayFirstDayOfMonth) {
        row.push('')
        l++
      }
    }
    while (row.length < 7) {
      if (j <= daysInMonth) {
        row.push(j)
      } else {
        row.push('')
      }
      j++
    }
    rows[i] = row
    i++
  }
  return rows
}
