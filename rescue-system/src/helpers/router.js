import Vue from 'vue';
import Router from 'vue-router';

// Import local files
import MainView from '../main/MainView'
import LoginPage from '../login/LoginPage'
import CreateEvent from '../main/events/CreateEvent'
import EventsTable from '../main/events/EventsTable'
import MissionsTable from '../main/missions/MissionsTable'

Vue.use(Router);

// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/create-event', name: 'Create Events', component: CreateEvent, adminOnly: true },
    { path: '/events', name: 'Events', component: MainView },
    // { path: '/eventsTable/event', component: Event },
    { path: '/missions', name: 'Missions', component: MissionsTable },
    // { path: '/map', component: MapView },
    
    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/login' }
  ]
});


router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/login', '/events'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
