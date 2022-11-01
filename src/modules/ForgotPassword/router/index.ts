export default [
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    meta: {
      class: 'forgot-password',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'ForgotPassword' */ '../views/index.vue'),
    children: [],
  },
]
