<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
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
            @click.stop="toggleAll"
          ></v-checkbox>
        </th>

        <th
          class="subheading text-xs-center black--text"
          v-for="header in props.headers"
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
      <tr :active="props.selected" @click.stop="props.selected = !props.selected">
        <td>
          <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
        </td>
        <td class="text-xs-center">{{ props.item.uuid }}</td>
        <td class="text-xs-center">{{ props.item.date }}</td>
        <td class="text-xs-center">{{ props.item.location }}</td>
        <td class="text-xs-center">{{ props.item.responders }}</td>
        <td class="text-xs-center">{{ props.item.events }}</td>
        <td class="text-xs-center">{{ props.item.status }}</td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    headers: [
      { text: "ID", align: "center", sortable: true, value: "uuid" },
      { text: "Date", align: "center", sortable: true, value: "date" },
      { text: "Location", align: "center", sortable: true, value: "location" },
      { text: "# of Responders", align: "center", sortable: true, value: "responders" },
      { text: "# of Events", align: "center", sortable: true, value: "events" },
      { text: "Status", align: "center", sortable: true, value: "status" }
    ],
    events: [
      {
        value: false,
        uuid: 1,
        date: "2018-11-30 13:05:00",
        location: "Baltimore, MD 21250",
        responders: 3,
        events: 5,
        status: "completed"
      },
      {
        value: false,
        uuid: 2,
        date: "2018-11-30 14:40:00",
        location: "Silver Spring, MD 20904",
        responders: 1,
        events: 2,
        status: "in-progress"
      },
      {
        value: false,
        uuid: 3,
        date: "2018-11-30 14:42:00",
        location: "Silver Spring, MD 20910",
        responders: 5,
        events: 3,
        status: "claimed"
      }
    ]
  }),
  props: {
    source: String
  }
};
</script>