import { TOPICS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const topicsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTopics: builder.query({
      query: (topicNo) => ({
        url: `${TOPICS_URL}/${topicNo}`,
      }),
      keepUnusedDataFor: 5,
    }),
 
  }),
});

export const { useGetTopicsQuery } = topicsApiSlice;
