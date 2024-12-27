import { PRACTICES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const subjectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPractices: builder.query({
      query: (practice_no) => ({
        url: `${PRACTICES_URL}/${practice_no}`,
      }),
      keepUnusedDataFor: 5,
    }),
 
  }),
});

export const { useGetPracticesQuery } = subjectsApiSlice;
