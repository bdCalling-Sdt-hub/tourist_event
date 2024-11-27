// src/Redux/baseApi.ts
import { baseUrl } from '@/Utils/serverUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Helper function to get the token
const getToken = () => {
    if (typeof window === 'undefined') {
        // Server-side logic
        const { cookies } = require('next/headers');
        return cookies().get('_token')?.value;
    } else {
        // Client-side logic
        return localStorage.getItem('_token');
    }
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['profile', 'event'],
    endpoints: (builder) => ({}),
});
export const fetchServerData = async (endpoint: string) => {
    const token = await getToken();

    const baseQuery = fetchBaseQuery({ baseUrl });

    const result = await baseQuery(
        {
            url: endpoint,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        {
            signal: new AbortController().signal,
            dispatch: () => { },
            getState: () => ({}),
            endpoint: "",
            abort: () => { },
            type: "query",
            extra: undefined,
        },
        {}
    );

    if (result.error) {
        // const errorMessage =
        //     typeof result.error.data === "string"
        //         ? result.error.data
        //         : JSON.stringify(result.error.data) || "Failed to fetch data";
        // throw new Error(errorMessage);
        throw new Error(result.error.data?.toString() || "Failed to fetch data");
    }

    return result.data;
};
export default baseApi;