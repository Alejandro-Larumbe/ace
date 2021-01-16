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
    byId: {}
  },
  resources: {}
}

export default initialStore;
