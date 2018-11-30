<template>
  <v-app id="main-view" style="padding: 10px 0px 0px 0px">
    <v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer" style="width: 250px" fixed app>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-title class="title font-weight-medium">Navigation</v-list-tile-title>
        </v-list-tile>

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

    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="primary" dark app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span>
        <v-toolbar-title class="headline font-weight-medium">Rescue Management System</v-toolbar-title>
      </span>
    </v-toolbar>

    <v-content flex class="px-0 py-3 ma-0">
      <v-container fluid class="pl-0 py-3 pr-5 ma-0">
        <v-data-table
          v-model="selected"
          :headers="eventTableHeaders"
          :items="events"
          :pagination.sync="pagination"
          select-all
          item-key="uuid"
          class="elevation-1"
        >
          <template slot="headers" slot-scope="props">
            <tr>
              <th>
                <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  primary
                  hide-details
                  @click="toggleAll"
                ></v-checkbox>
              </th>

              <th
                class="subheading text-xs-center black--text"
                v-for="header in headers"
                :key="header.text"
                :class="['column sortable', pagination.descending ? 'desc' : 'asc',
              header.value === pagination.sortBy ? 'active' : '']"
              >
                <v-icon small>arrow_upward</v-icon>
                {{ header.text }}
              </th>
            </tr>
          </template>

          <template slot="items" slot-scope="props">
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
              </td>
              <td class="text-xs-center">{{ props.item.uuid }}</td>
              <td class="text-xs-center">{{ props.item.date }}</td>
              <td class="text-xs-center">{{ props.item.address }}</td>
              <td class="text-xs-center">{{ props.item.victims }}</td>
              <td class="text-xs-center">{{ props.item.priority }}</td>
              <td class="text-xs-center">{{ props.item.status }}</td>
            </tr>
          </template>
        </v-data-table>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "event_note", text: "Events Table" },
      { icon: "notification_important", text: "Missions Table" },
      { icon: "map", text: "Map View" },
      { icon: "search", text: "Search" },
      { icon: "power_settings_new", text: "Log Off" }
    ],
    selected: [],
    headers: [
      { text: "ID", align: "center", sortable: true, value: "uuid" },
      { text: "Date", align: "center", sortable: true, value: "date" },
      { text: "Location", align: "center", sortable: true, value: "address" },
      { text: "Victims", align: "center", sortable: true, value: "victims" },
      { text: "Priority", align: "center", sortable: true, value: "priority" },
      { text: "Status", align: "center", sortable: true, value: "status" }
    ],
    events: [
      {
        value: false,
        uuid: 1,
        date: "2018-11-30 13:05:00",
        address: "1000 Hilltop Cir, Baltimore, MD 21250",
        victims: 4,
        priority: 5,
        status: "unassigned"
      },
      {
        value: false,
        uuid: 2,
        date: "2018-11-30 14:40:00",
        address: "12932 Beethoven Blvd, Silver Spring, MD 20904",
        victims: 5,
        priority: 3,
        status: "in-progress"
      },
      {
        value: false,
        uuid: 3,
        date: "2018-11-30 14:42:00",
        address: "7716 Piney Branch Rd, Silver Spring, MD 20910",
        victims: 20,
        priority: 1,
        status: "assigned"
      }
    ]
  }),
  props: {
    source: String
  }
};
</script>