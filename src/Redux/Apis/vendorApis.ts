import { baseApi } from "../baseApi";

const vendorApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // POST: Send request for vendor
        sendRequest: builder.mutation({
            query: (data) => {
                const token = localStorage.getItem('token'); // Get token from localStorage
                return {
                    url: 'auth/vendor/send-request',
                    method: 'POST',
                    body: data,
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '', // Send token if it exists
                    },
                };
            },
        }),

        // GET: Fetch vendor profile
        getProfile: builder.query({
            query: () => {
                const token = localStorage.getItem('token'); // Get token from localStorage
                return {
                    url: 'vendor/profile',
                    method: 'GET',
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '', // Send token if it exists
                    },
                };
            },
        }),

        // DELETE: Delete partner account
        deleteAccount: builder.mutation({
            query: () => {
                const token = localStorage.getItem('token'); // Get token from localStorage
                return {
                    url: '/partner/delete-account',
                    method: 'DELETE',
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '', // Send token if it exists
                    },
                };
            },
        }),
    }),
});

export const {
    useSendRequestMutation,
    useGetProfileQuery,
    useDeleteAccountMutation,
} = vendorApis;
