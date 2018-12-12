import Vue from 'vue';
import Router from 'vue-router';

// Import local files
import LoginPage from '../login/LoginPage'
import MainView from '../main/MainView'
import EventsTable from '../main/events/EventsTable'
import MissionsTable from '../main/missions/MissionsTable'
import CreateEvent from '../main/events/CreateEvent'

Vue.use(Router);


// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/main', name: 'Main', component: MainView },
    { path: '/main/events', name: 'Events', component: EventsTable },
    { path: '/main/missions', name: 'Missions', component: MissionsTable },
    { path: '/create', name: 'Create Events', component: CreateEvent, adminOnly: true },
    // { path: '/eventsTable/event', component: Event },
    // { path: '/map', component: MapView },
    
    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/login' }
  ]
});

router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/login', '/main', '/create'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})



export const router_main = new Router({
  mode: 'history',
  routes: [
    { path: '/main/events', name: 'Events', component: EventsTable },
    { path: '/main/missions', name: 'Missions', component: MissionsTable },
    { path: '/create', name: 'Create Events', component: CreateEvent, adminOnly: true },
    // { path: '/map', component: MapView },
    { path: '*', redirect: '/login' }
  ]
});

router_main.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/main/*'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})