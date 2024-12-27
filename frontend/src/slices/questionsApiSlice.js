import { QUESTIONS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const questionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: (examNo) => ({
        url: `${QUESTIONS_URL}/${examNo}`,
      }),
      keepUnusedDataFor: 5,
    }),
   
  }),
});

export const { useGetQuestionsQuery} = questionsApiSlice;
