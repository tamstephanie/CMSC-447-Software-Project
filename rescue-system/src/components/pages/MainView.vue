<template>
  <v-app id="main-view" style="padding: 10px 0px 0px 0px">

    <!-- Navigation drawer -->
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer" style="width: 250px" fixed app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title class="title font-weight-medium">Navigation</v-list-tile-title>
        </v-list-tile>

        <!-- Format layout of icons & text for links -->
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">some text here</a>
            </v-flex>
          </v-layout>
          
          <v-list-tile v-else :key="item.text" @click="foo">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
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
    <v-content flex class="px-0 py-3 ma-0">
      <v-container fluid class="pl-0 py-3 pr-5 ma-0">
        <!-- Need to dynamically change view based on nav selection -->
        <EventsTable />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import EventsTable from '../views/EventsTable';

export default {
  components: {
    EventsTable
  },
  data: () => ({
    drawer: null,
    items: [   // Links in navigation drawer
      { icon: "event_note", text: "Events Table" },
      { icon: "notification_important", text: "Missions Table" },
      { icon: "map", text: "Map View" },
      { icon: "search", text: "Search" },
      { icon: "power_settings_new", text: "Log Off" }
    ]
  }),
  props: {
    source: String
  }
};
</script>