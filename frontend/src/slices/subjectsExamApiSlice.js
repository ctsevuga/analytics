import { SUBJECTSEXAM_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const subjectsExamApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubjectsExam: builder.query({
      query: ({ subject_no,examNo }) => ({
        url: SUBJECTSEXAM_URL,
        params: { subject_no,examNo },
      }),
      keepUnusedDataFor: 5,
    }),
 
  }),
});

export const { useGetSubjectsExamQuery } = subjectsExamApiSlice;
