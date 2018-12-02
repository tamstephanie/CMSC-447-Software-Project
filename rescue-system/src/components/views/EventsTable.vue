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
        <td class="text-xs-center">{{ props.item.address }}</td>
        <td class="text-xs-center">{{ props.item.victims }}</td>
        <td class="text-xs-center">{{ props.item.priority }}</td>
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