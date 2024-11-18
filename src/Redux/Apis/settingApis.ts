import { baseApi } from "../baseApi";

const settingApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // GET: Fetch 'About Us' information
        getAboutUs: builder.query({
            query: () => ({
                url: 'rules/get-about-us',
                method: 'GET',
            }),
        }),

        // GET: Fetch 'Rules' information
        getRules: builder.query({
            query: () => ({
                url: '/rules/get-rules',
                method: 'GET',
            }),
        }),

        // GET: Fetch 'Facts' information
        getFacts: builder.query({
            query: () => ({
                url: 'rules/get-facts',
                method: 'GET',
            }),
        }),

        // GET: Fetch 'FAQs' information
        getFaqs: builder.query({
            query: () => ({
                url: 'rules/get-faqs',
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAboutUsQuery,
    useGetRulesQuery,
    useGetFactsQuery,
    useGetFaqsQuery,
} = settingApis;
