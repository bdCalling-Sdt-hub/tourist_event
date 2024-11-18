import { baseApi } from "../baseApi";

const paymentApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // POST: Create payment intent
        createPaymentIntent: builder.mutation({
            query: (data) => ({
                url: 'payments/create_intent',
                method: 'POST',
                body: data,
            }),
        }),

        // POST: Confirm payment success
        successPaymentIntent: builder.mutation({
            query: (data) => ({
                url: '/payments/success_intent',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useCreatePaymentIntentMutation,
    useSuccessPaymentIntentMutation,
} = paymentApis;
