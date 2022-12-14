export default [
  {
    path: '/users',
    name: 'Users',
    meta: {
      title: 'Users',
      class: 'users',
      requiresAuth: true,
      hideInNav: false,
    },
    component: () =>
      import(/* webpackChunkName: 'Users' */ '../views/List.vue'),
    children: [],
  },
  {
    path: '/user/:id',
    name: 'Profile',
    meta: {
      title: 'Profile',
      class: 'user',
      requiresAuth: true,
      hideInNav: true,
    },
    component: () =>
      import(/* webpackChunkName: 'Profile' */ '../views/Profile.vue'),
    children: [],
  },
]
