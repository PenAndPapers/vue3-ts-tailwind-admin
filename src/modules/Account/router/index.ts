export default [
  {
    path: '/account',
    name: 'Account',
    meta: {
      title: 'Account',
      class: 'account',
      requiresAuth: true,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Account' */ '../views/index.vue'),
    children: [],
  },
]
