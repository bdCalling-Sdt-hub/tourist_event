import baseApi from "../baseApi";

const bannerApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBanner: builder.query({
            query: () => `dashboard/banners`,
        })
    })
})
export const { useGetBannerQuery } = bannerApis