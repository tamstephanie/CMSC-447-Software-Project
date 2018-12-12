<template>
  <v-app id="main-view">

    <!-- Navigation drawer -->
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer" style="width: 250px" fixed app class="px-2">
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title class="title font-weight-medium">Navigation</v-list-tile-title>
        </v-list-tile>

        <!-- Format layout of icons & text for links -->          
        <v-list-tile @click="component='events'">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Events Table</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="component='missions'">
          <v-list-tile-action>
            <v-icon>notification_important</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Missions Table</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="component='map'">
          <v-list-tile-action>
            <v-icon>map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Map View</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="component='create'">
          <v-list-tile-action>
            <v-icon>add_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Create Event</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <!-- <v-list-tile @click.stop="">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-list-tile to="/login">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Off</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Toolbar as header with nav-drawer toggle -->
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span>
        <v-toolbar-title class="headline font-weight-medium">Rescue Management System</v-toolbar-title>
      </span>
    </v-toolbar>

    <!-- Main content of site that dynamically changes -->
    <v-content class="px-0 py-3 ma-0">
      <v-container fluid justify-space-around>
        <!-- Need to dynamically change view based on nav selection -->
        <component v-bind:is="component" />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import EventsTable from './events/EventsTable'
import MissionsTable from './missions/MissionsTable'
import MapView from './map/Map'
import CreateEvent from './events/CreateEvent'

export default {
  name: 'Main',
  components: {
    'events': EventsTable,
    'missions': MissionsTable,
    'map': MapView,
    'create': CreateEvent
  },
  data: () => ({
    drawer: null,
    component: 'events'
  })
};
</script>