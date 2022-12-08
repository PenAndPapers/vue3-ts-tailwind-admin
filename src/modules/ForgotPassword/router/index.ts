export default [
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: {
      title: 'Forgot Password',
      class: 'forgot-password',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'ForgotPassword' */ '../views/index.vue'),
    children: [],
  },
]
