import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token;
        if (token) {
          headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credential) => ({
        url: `/users/login`,
        method: 'POST',
        body: credential
      }),
    }),
    register: builder.mutation({
        query: (credential) => ({
          url: `/users/signup`,
          method: 'POST',
          body: credential
        }),
      }),
     getCurrentUser: builder.query({
        query: () => ({
          url: '/users/current'
        })
     })
  }),
})

export const { useGetCurrentUserQuery, useLoginMutation, useRegisterMutation } = authApi