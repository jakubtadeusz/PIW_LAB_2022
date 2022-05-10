import { createSlice } from "@reduxjs/toolkit";

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    images: [],
    savedStudents: []
  },
  reducers: {
    setStudents: (state, action) => {
      return {
        ...state,
        students: [...action.payload]
      };
    },
    addStudentImage: (state, action) => {
      const newImages = [...state.images];
      newImages[action.payload.id] = action.payload.url;
      return{
        ...state,
        images: newImages
      };
    },
    addStudent: (state, action) => {
      return {
        ...state,
        students: state.students.concat(action.payload).sort((a, b) => b.date-a.date)
      }
    },
    saveStudent: (state, action) => {
      return {
        ...state,
        savedStudents: state.savedStudents.concat(action.payload)
      }
    },
    unfollowStudent: (state, action) =>{
      return {
        ...state,
        savedStudents: state.savedStudents.filter(s=>s.id !== action.payload.id)
      }
    }

  },
});

export const { setStudents, addStudentImage, addStudent, saveStudent, unfollowStudent } = studentsSlice.actions

export default studentsSlice.reducer