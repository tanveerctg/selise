
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'home',path: '', component: () => import('pages/HomePage.vue') }
    ]
  },
    {
    path: '/product/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'product',path: '', component: () => import('pages/ProductDetailsPage.vue') ,props: true}
    ]
  },
    {
    path: '/cart',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name:'cart',path: '', component: () => import('pages/CartPage.vue') ,props: true}
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
