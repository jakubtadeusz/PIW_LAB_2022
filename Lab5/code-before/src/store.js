import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from './Features/Students/studentsSlice'

export default configureStore({
  reducer: {
    students: studentsReducer
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)