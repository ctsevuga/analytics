import { PRACTICESEXAM_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const practicesExamApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPracticesExam: builder.query({
        query: (examNo) => ({
          url: `${PRACTICESEXAM_URL}/${examNo}`,
        }),
        keepUnusedDataFor: 5,
      }),
 
  }),
});

export const { useGetPracticesExamQuery } = practicesExamApiSlice;
