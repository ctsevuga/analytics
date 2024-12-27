import { apiSlice } from './apiSlice';
import { RESULTS_URL } from '../constants';

console.log(RESULTS_URL)

export const resultApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createResult: builder.mutation({
      query: (data) => ({
        url: `${RESULTS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    getResultDetails: builder.query({
      query: (id) => ({
        // url: `${RESULTS_URL}/${id}`,
        url: RESULTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
   
    getMyResults: builder.query({
      query: (user_id) => ({
        url: `${RESULTS_URL}/mine/${user_id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getResults: builder.query({
        query: () => ({
        url: RESULTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
 
  }),
});

export const {
  useCreateResultMutation,
  useGetResultDetailsQuery,
  useGetMyResultsQuery,
  useGetResultsQuery,
  
} = resultApiSlice;
