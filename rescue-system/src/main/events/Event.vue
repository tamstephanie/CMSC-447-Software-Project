<template>
  <v-card flex fluid>
    <v-layout justify-center>
      <v-card-title class="headline font-weight-bold">
        Event: {{ event.id }}
      </v-card-title>
    </v-layout>

    <v-layout row wrap class="title pl-5 pb-5 font-weight-normal">
      <v-flex xs6>
        Date: {{ event.date }}
      </v-flex>


    </v-layout>
  </v-card>
</template>

<script scoped>
export default {
  data: () => ({
    event: {
      id: 'E2912',
      date: '2018-12-03 13:26 EST'
    }
  })
};
</script>