<template>
  <v-card>
    <form class="pa-4">
      <v-text-field
        v-model="address"
        :error-messages="addressError"
        label="Address"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="victims"
        :error-messages="victimsError"
        label="# of Victims"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </form>
  </v-card>
</template>