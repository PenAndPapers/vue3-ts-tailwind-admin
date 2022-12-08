export default [
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: 'Register',
      class: 'register',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Register' */ '../views/index.vue'),
    children: [],
  },
]
