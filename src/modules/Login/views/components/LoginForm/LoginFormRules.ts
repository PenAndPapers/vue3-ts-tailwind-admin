export const LoginFormRules = {
  email: [
    { required: true, message: 'Email address is required' },
    { type: 'email', message: 'Please enter a valid email address' },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
    },
    { min: 8, message: 'Password must be at least 8 characters' },
  ],
}
