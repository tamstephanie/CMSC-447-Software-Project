import Vue from 'vue';
import Router from 'vue-router';

// Import local files
import LoginPage from '../login/LoginPage'
import { CreateEvent, EventsTable, Event } from '../main/events/.'
import { CreateMission, MissionsTable } from '../main/missions/.'

Vue.use(Router);

// Create paths for each page
export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LoginPage },
    { path: '/createEvent', component: CreateEvent },
    { path: '/eventsTable', component: EventsTable },
    { path: '/eventsTable/event', component: Event },
    { path: '/createMission', component: CreateMission },
    { path: '/missionsTable', component: MissionsTable },
    /* Need more paths to handle MainView and
    subviews (EventsTable, MissionsTable, EventCreation, MissionCreation, MapView) */

    // If path doesn't exist, redirect to main page after logging in?
    { path: '*', redirect: '/' }
  ]
});

/*<li class="nav-item">
  <router-link class="nav-link" to="/createEvent">Create Event</router-link>
</li>
<li class="nav-item">
  <router-link class="nav-link" to="/eventsTable">Events</router-link>
 </li>
<li class="nav-item">
   <router-link class="nav-link" to="/eventsTable/event">Event</router-link>
 </li>
<li class="nav-item">
  <router-link class="nav-link" to="/createMission">Create Mission</router-link>
</li>
<li class="nav-item">
  <router-link class="nav-link" to="/missionsTable">Missions Table</router-link>
 </li>
<li class="nav-item">
   <router-link class="nav-link" to="/contact">contact</router-link>
 </li>*/

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
