import baseApi from "../baseApi";

const categoryApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `dashboard/get-category`,
        })
    })
})
export const { useGetCategoryQuery } = categoryApis