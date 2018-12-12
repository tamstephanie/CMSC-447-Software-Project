import Vue from 'vue';
import Router from 'vue-router';

// Import local files
import LoginPage from '../login/LoginPage'
import MainView from '../main/MainView'
import EventsTable from '../main/events/EventsTable'
import MissionsTable from '../main/missions/MissionsTable'
import CreateEvent from '../main/events/CreateEvent'
import MapView from '../main/map/Map'

Vue.use(Router);


// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/main', name: 'Main', component: MainView,
      children: [
        { path: '/events', name: 'Events', component: EventsTable },
        { path: '/missions', name: 'Missions', component: MissionsTable },
        { path: '/map', name: 'Map', component: MapView }
      ]
    },
    { path: '/create', name: 'Create Events', component: CreateEvent, adminOnly: true },
    // { path: '/eventsTable/event', component: Event },
    
    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/login' }
  ]
});

router.beforeEach((to, from, next) => {
  // Redirect to login page if not logged in and trying to access a restricted page
  const publicPage = ['/login', '/main', '/events',
                      '/missions', '/map', '/create'];
  const authRequired = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})