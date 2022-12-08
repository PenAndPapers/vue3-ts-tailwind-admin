export default [
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      class: 'dashboard',
      requiresAuth: true,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Dashboard' */ '../views/index.vue'),
    children: [],
  },
]
