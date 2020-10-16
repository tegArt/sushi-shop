import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import(/* webpackChunkName: "feedback" */ '../views/Feedback.vue'),
  },
  {
    path: '/purchase-history',
    name: 'PurchaseHistory',
    component: () => import(/* webpackChunkName: "purchaseHistory" */ '../views/PurchaseHistory.vue'),
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "addProduct" */ '../views/AddProduct.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LogIn.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue'),
  },
  {
    path: '/styleguide',
    name: 'Styleguide',
    component: () => import(/* webpackChunkName: "styleguide" */ '../views/Styleguide.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
