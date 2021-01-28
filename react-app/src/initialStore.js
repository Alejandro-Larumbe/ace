const initialStore = {
  students: {
    byId: {},
    allIds: [],
  },
  instructor: {},
  user: {},
  ui: {
    userCardMode: 'view',
    calendarView: 'month',
    calendarLessonView: "",
  },
  tasks: {
    byId: {},
    booksById:{},
    booksById: {},
    date:new Date()
  },
  resources: {
    byId:{}
  },
  schedule: {
    lessonId: '',

  },
  repertoire: {
    piecesById: {},
    booksById: {},
  }
}

export default initialStore;
