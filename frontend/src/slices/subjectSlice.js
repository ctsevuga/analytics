import { createSlice } from '@reduxjs/toolkit';
// import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('subject')
  ? JSON.parse(localStorage.getItem('subject'))
  : { questionsFetched: [] };

const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    saveQuestions: (state, action) => {
      state.questionsFetched = action.payload;
      localStorage.setItem("subject", JSON.stringify(state));
    },



  },
});

export const {
  saveQuestions,
  
} = subjectSlice.actions;

export default subjectSlice.reducer;