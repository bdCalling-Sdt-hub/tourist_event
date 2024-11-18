
import { baseUrl } from '@/Utils/serverUrl'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// import getToken from './cookieGet';
export const baseApi = createApi({
    reducerPath: 'Tourist',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders:  (headers, { getState }) => {
            let token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
})
