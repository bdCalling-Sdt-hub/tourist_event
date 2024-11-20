import { baseApi } from "../baseApi";

const userApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: () => ({
                url: "auth/user/profile",
                method: "GET",
            }),
        }),
        getVendorProfile: builder.query({
            query: (id) => ({
                url: `vendor/get-details/${id}`,
                method: "GET",
            }),
        }),
        editProfile: builder.mutation({
            query: (data) => ({
                url: "auth/user/edit-profile",
                method: "PATCH",
                body: data,
            }),
        }),
        deleteAccount: builder.mutation({
            query: () => ({
                url: "auth/user/delete-account",
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetProfileQuery,
    useEditProfileMutation,
    useDeleteAccountMutation,
    useGetVendorProfileQuery
} = userApis;
