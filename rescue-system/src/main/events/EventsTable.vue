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
          @click="changeSort(header.value)"
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
        <td class="text-xs-center">{{ props.item.address }}</td>
        <td class="text-xs-center">{{ props.item.priority }}</td>
        <td class="text-xs-center">{{ props.item.victims }}</td>
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
      { text: "Address", align: "center", sortable: true, value: "address" },
      { text: "Priority", align: "center", sortable: true, value: "priority" },
      { text: "Victims", align: "center", sortable: true, value: "victims" },
      // phone number
      // aid type
      // mission id
      // dispatcher id
      // comments
      { text: "Status", align: "center", sortable: true, value: "status" }
    ],
    events: [
      {
        value: false,
        uuid: 1,
        date: "2018-11-27 13:05:00",
        address: "1000 Hilltop Cir, Baltimore, MD 21250",
        priority: 5,
        victims: 4,
        status: "unassigned"
      },
      {
        value: false,
        uuid: 2,
        date: "2018-11-30 14:40:00",
        address: "1 Federal Dr, Baltimore, MD 22593",
        priority: 3,
        victims: 5,
        status: "in-progress"
      },
      {
        value: false,
        uuid: 3,
        date: "2018-11-30 14:42:00",
        address: "19328 Bakers Hill Rd, Annapolis, MD 20920",
        priority: 1,
        victims: 20,
        status: "assigned"
      },
      {
        value: false,
        uuid: 4,
        date: "2018-12-01 14:42:00",
        address: "7716 Piney Branch Rd, Silver Spring, MD 20910",
        priority: 1,
        victims: 9,
        status: "assigned"
      },
      {
        value: false,
        uuid: 5,
        date: "2018-12-08 15:39:00",
        address: "9928 Test Ave, Baltimore, MD 21250",
        priority: 2,
        victims: 10,
        status: "assigned"
      },
      {
        value: false,
        uuid: 6,
        date: "2018-12-12 18:23:00",
        address: "500 Walker Ave, Baltimore, MD 21250",
        priority: 4,
        victims: 15,
        status: "assigned"
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    toggleAll () {
      if (this.selected.length) {
        this.selected = []
      }
      else {
        this.selected = this.events.slice()
      }
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  }
};
</script>