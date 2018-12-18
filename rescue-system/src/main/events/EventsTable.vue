<template>
  <v-data-table
    :headers="headers"
    :items="events"
    :pagination.sync="pagination"
    item-key="uuid"
    class="elevation-1"
  >
    <template slot="headers" slot-scope="props">
      <tr>
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
      <td class="text-xs-center">{{ props.item.uuid }}</td>
      <td class="text-xs-center">{{ props.item.date }}</td>
      <td class="text-xs-center">{{ props.item.address }}</td>
      <td class="text-xs-center">{{ props.item.priority }}</td>
      <td class="text-xs-center">{{ props.item.victims }}</td>
      <td class="text-xs-center">{{ props.item.phone }}</td>
      <td class="text-xs-center">{{ props.item.aid }}</td>
      <td class="text-xs-center">{{ props.item.notes }}</td>
      <td class="text-xs-center">{{ props.item.status }}</td>
      <td class="text-xs-center">{{ props.item.mission }}</td>
      <td class="text-xs-center">{{ props.item.dispatcher }}</td>
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
      { text: "Phone #", align: "center", value: "phone" },
      { text: "Aid", align: "center", sortable: true, value: "aid" },
      { text: "Notes", align: "center", value: "notes" },
      { text: "Status", align: "center", sortable: true, value: "status" },
      { text: "Mission", align: "center", sortable: true, value: "mission" },
      { text: "Dispatcher", align: "center", sortable: true, value: "dispatcher" }
    ],
    events: [
      {
        value: false,
        uuid: 1,
        date: "2018-11-27 13:05:00",
        address: "1000 Hilltop Cir, Baltimore, MD 21250",
        priority: 5,
        victims: 4,
        phone: "301-234-2810",
        aid: "Supplies",
        notes: "House has run out of food",
        status: "unassigned",
        mission: 3,
        dispatcher: 82
      },
      {
        value: false,
        uuid: 2,
        date: "2018-11-30 14:40:00",
        address: "1 Federal Dr, Baltimore, MD 22593",
        priority: 3,
        victims: 5,
        phone: "301-234-2810",
        aid: "Essential Supplies",
        notes: "Blankets, heat packs, etc.",
        status: "unassigned",
        mission: 3,
        dispatcher: 82
      },
      {
        value: false,
        uuid: 3,
        date: "2018-11-30 14:42:00",
        address: "19328 Bakers Hill Rd, Annapolis, MD 20920",
        priority: 1,
        victims: 2,
        phone: "240-324-1023",
        aid: "Medical",
        notes: "Wife entered labor",
        status: "assigned",
        mission: 1,
        dispatcher: 7
      },
      {
        value: false,
        uuid: 4,
        date: "2018-12-01 14:42:00",
        address: "7716 Piney Branch Rd, Silver Spring, MD 20910",
        priority: 1,
        victims: 15,
        phone: "401-204-9472",
        aid: "Rescue",
        notes: "Building collapsed on top of about 15 people, and currently unsure of their statuses",
        status: "assigned",
        mission: 2,
        dispatcher: 26
      },
      {
        value: false,
        uuid: 5,
        date: "2018-12-08 15:39:00",
        address: "9928 Test Ave, Baltimore, MD 21250",
        priority: 2,
        victims: 6,
        phone: "192-392-0028",
        aid: "Rescue",
        notes: "Mother, child, and grandmother are trapped in quickly flooding basement",
        status: "unassigned",
        mission: 3,
        dispatcher: 7
      },
      {
        value: false,
        uuid: 6,
        date: "2018-12-12 18:23:00",
        address: "500 Walker Ave, Baltimore, MD 21250",
        priority: 4,
        victims: 11,
        phone: "543-659-1570",
        aid: "Food",
        notes: "Need more water and food",
        status: "unassigned",
        mission: 3,
        dispatcher: 7
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
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