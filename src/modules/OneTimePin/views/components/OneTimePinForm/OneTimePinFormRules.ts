export const OneTimePinFormRules = {
  otp: [
    {
      required: true,
      message: 'OTP is required',
    },
    {
      min: 8,
      message: 'OTP must be 8 characters',
    },
  ],
}
