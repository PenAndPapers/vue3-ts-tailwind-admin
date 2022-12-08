export default [
  {
    path: '/login',
    alias: '/',
    name: 'Login',
    meta: {
      title: 'Login',
      class: 'login',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Login' */ '../views/index.vue'),
    children: [],
  },
]
