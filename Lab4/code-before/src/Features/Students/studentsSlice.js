import { createSlice } from "@reduxjs/toolkit";

export const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    images: []
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
    }

  },
});

export const { setStudents, addStudentImage, addStudent } = studentsSlice.actions

export default studentsSlice.reducer