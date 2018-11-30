import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../components/LoginPage'

Vue.use(Router);

// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },

    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/');
  }

  next();
})