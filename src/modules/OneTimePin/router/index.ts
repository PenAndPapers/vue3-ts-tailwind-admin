export default [
  {
    path: '/one-time-pin',
    name: 'OneTimePin',
    meta: {
      title: 'One Time Pin',
      class: 'one-time-pin',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'OneTimePin' */ '../views/index.vue'),
    children: [],
  },
]
