import { baseApi } from "../baseApi";

const authApis = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    activateUser: builder.mutation({
      query: (data) => ({
        url: "auth/activate-user",
        method: "POST",
        body: data,
      }),
    }),
    activeResend: builder.mutation({
      query: (data) => ({
        url: "auth/active-resend",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    forgotResend: builder.mutation({
      query: (data) => ({
        url: "auth/forgot-resend",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, data }) => ({
        url: "auth/reset-password",
        method: "POST",
        body: data,
        params: { email },
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "auth/change-password",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivateUserMutation,
  useActiveResendMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useForgotResendMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authApis;
