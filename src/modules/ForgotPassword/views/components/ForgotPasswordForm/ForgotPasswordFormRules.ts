export const ForgotPasswordFormRules = {
  email: [
    {
      required: true,
      message: 'Email is required',
    },
    { type: 'email', message: 'Please enter a valid email address' },
  ],
}
