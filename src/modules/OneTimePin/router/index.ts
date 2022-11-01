export default [
  {
    path: '/one-time-pin',
    name: 'OneTimePin',
    meta: {
      class: 'one-time-pin',
      requiresAuth: false,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'OneTimePin' */ '../views/index.vue'),
    children: [],
  },
]
