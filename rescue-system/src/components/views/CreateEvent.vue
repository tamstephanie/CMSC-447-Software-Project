<template>
  <v-card flex fluid>
    <form class="pa-4">
      <v-layout row wrap>
        <v-flex xs6>
          <v-text-field
            v-model="address"
            :rules="addressRules"
            label="Address"
            placeholder="Street, City, State ZIP"
            required
          ></v-text-field>
        </v-flex>

        <v-flex class="ml-5" xs1>
          <v-select
            :items="priorities"
            :rules="[v => !!v || 'Priority required']"
            label="Priority"
            required
            justify-center
          ></v-select>
        </v-flex>

        <v-flex class="ml-5" xs2>
          <v-text-field 
            v-model="victims"
            :rules="victimsRules"
            label="# of Victims"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
        <v-flex xs5>
          <v-text-field
            v-model="contactName"
            :rules="[v => !!v || 'Contact person\'s name is required']"
            label="Contact Name"
            placeholder="First  Last"
            required
          ></v-text-field>
        </v-flex>

        <v-flex class="ml-5" xs2>
          <v-text-field
            v-model="contactPhone"
            :rules="phoneRules"
            label="Phone Number"
            required
            justify-center
          ></v-text-field>
        </v-flex>
      </v-layout>
    </form>
  </v-card>
</template>

<script scoped>
export default {
  data: () => ({
    address: '',
    addressRules: [
      v => !!v || 'An address is required',
      v => /\d{1,9}\s.+[,]\s.+[,]/.test(v) || 'Please follow the format'
    ],
    select: null,
    priorities: [1, 2, 3, 4, 5],
    victims: '',
    victimsRules: [
      v => !!v || 'Number of victims required',
      v => /\d+/.test(v) || 'Must be a number'
    ],
    contactName: '',
    contactPhone: '',
    phoneRules: [
      v => !!v || 'A phone number is required',
      v => /\d{3}-\d{3}-\d{4}/.test(v) || 'Please follow the following format: XXX-XXX-XXXX'
    ],
  })
};
</script>