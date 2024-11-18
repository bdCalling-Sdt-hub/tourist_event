import { baseApi } from "../baseApi";

const userApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => {
                const token = localStorage.getItem('token'); 
                return {
                    url: 'auth/user/profile',
                    method: 'GET',
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
                    },
                };
            },
        }),
        editProfile: builder.mutation({
            query: (data) => {
                const token = localStorage.getItem('token'); 
                return {
                    url: 'auth/user/edit-profile',
                    method: 'PATCH',
                    body: data,
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '', 
                    },
                };
            },
        }),
        deleteAccount: builder.mutation({
            query: () => {
                const token = localStorage.getItem('token'); 
                return {
                    url: 'auth/user/delete-account',
                    method: 'DELETE',
                    headers: {
                        Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
                    },
                };
            },
        }),
    }),
});

export const {
    useGetProfileQuery,
    useEditProfileMutation,
    useDeleteAccountMutation,
} = userApis;
