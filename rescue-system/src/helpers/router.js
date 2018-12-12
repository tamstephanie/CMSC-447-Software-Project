import Vue from 'vue';
import Router from 'vue-router';

// Import local files
import LoginPage from '../login/LoginPage'
import MainView from '../main/MainView'

Vue.use(Router);


// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/main', name: 'Main', component: MainView },
    
    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/login' }
  ]
});

router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/login', '/main'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})