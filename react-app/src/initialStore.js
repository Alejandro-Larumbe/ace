const initialStore = {
  students: {
    byId: {},
    allIds: [],
  },
  instructor: {},
  user: {},
  ui: {
    userCardMode: 'view',
    calendarView: 'month'
  },
  tasks: {
    byId: {},
    booksById:{},
    booksById: {},
    date:new Date()
  },
  resources: {},
}

export default initialStore;
