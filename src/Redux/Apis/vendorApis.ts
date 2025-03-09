import { baseApi } from "../baseApi";

const vendorApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST: Send request for vendor
    sendRequest: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token"); // Get token from localStorage
        return {
          url: "vendor/send-vendor-request",
          method: "PATCH",
          body: data,
          // headers: {
          //     Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
          // },
        };
      },
    }),
    updateRequest: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token");
        return {
          url: "vendor/update",
          method: "PATCH",
          body: data,
          // headers: {
          //     Authorization: token ? `Bearer ${JSON.parse(token)}` : '',
          // },
        };
      },
      invalidatesTags: ["profile"],
    }),
    vendorRequest: builder.mutation({
      query: (data) => {
        return {
          url: "vendor/register",
          method: "POST",
          body: data,
        };
      },
    }),

    // GET: Fetch vendor profile
    getProfile: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "vendor/profile",
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${JSON.parse(token)}` : "",
          },
        };
      },
    }),

    // DELETE: Delete partner account
    deleteAccount: builder.mutation({
      query: () => {
        const token = localStorage.getItem("token"); // Get token from localStorage
        return {
          url: "/partner/delete-account",
          method: "DELETE",
          headers: {
            Authorization: token ? `Bearer ${JSON.parse(token)}` : "", // Send token if it exists
          },
        };
      },
    }),
  }),
});

export const {
  useSendRequestMutation,
  useVendorRequestMutation,
  useGetProfileQuery,
  useDeleteAccountMutation,
  useUpdateRequestMutation,
} = vendorApis;
