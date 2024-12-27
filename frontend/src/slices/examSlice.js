import { createSlice } from '@reduxjs/toolkit';
// import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('exam')
  ? JSON.parse(localStorage.getItem('exam'))
  : { questionsArray: [],Subject:"",Test:1,subject_no:1 };

const examSlice = createSlice({
  name: 'exam',
  initialState,
  reducers: {
    addToExam: (state, action) => {
      const question = action.payload;

      const existQuestion = state.questionsArray.find((x) => x._id === question._id);

      if (existQuestion) {
        state.questionsArray = state.questionsArray?.map((x) =>
          x._id === existQuestion._id ? question : x
        );
      } else {
        state.questionsArray = [...state.questionsArray, question];
      }

      // return updateExam(state);
      return state;

    },
    saveSubject: (state, action) => {
      state.Subject = action.payload;
      localStorage.setItem("exam", JSON.stringify(state));
    },
    saveTest: (state, action) => {
      state.Test = action.payload;
      localStorage.setItem("exam", JSON.stringify(state));
    },
    saveSubjectNo: (state, action) => {
      state.subject_no = action.payload;
      localStorage.setItem("exam", JSON.stringify(state));
    },

    // clearExam: (state, action) => {
    //   state.questionsArray = [];
    //   state.Subject = ""
    //   localStorage.setItem('exam', JSON.stringify(state));
    //   localStorage.removeItem('persist:root');
    // },
    resetState: (state) => {
      state = {
        questionsArray: [],
        Subject:"",
   
      };
    },
  },
});

export const {
  addToExam,
  saveSubject,
  saveTest,
  saveSubjectNo,
  resetState,
  
} = examSlice.actions;

export default examSlice.reducer;
