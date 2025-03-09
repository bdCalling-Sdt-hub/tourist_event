import { baseApi } from "../baseApi";

const paymentApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // POST: Create payment intent
    createPaymentIntent: builder.mutation({
      query: (id) => ({
        url: `payments/checkout-session?packageId=${id}`,
        method: "POST",
        body: {},
      }),
    }),

    // POST: Confirm payment success
    successPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/payments/success_intent",
        method: "POST",
        body: data,
      }),
    }),
    paymentHistory: builder.query({
      query: () => ({
        url: "/payments/plan_history",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreatePaymentIntentMutation,
  useSuccessPaymentIntentMutation,
  usePaymentHistoryQuery,
} = paymentApis;
