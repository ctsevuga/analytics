import { SUBJECTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const subjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSubjects: builder.query({
      query: (subject_no) => ({
        url: `${SUBJECTS_URL}/${subject_no}`,
      }),
      keepUnusedDataFor: 5,
    }),
 
  }),
});

export const { useGetSubjectsQuery } = subjectsApiSlice;
