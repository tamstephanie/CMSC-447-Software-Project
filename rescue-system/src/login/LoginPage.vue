<template>
  <v-app id="login">

    <!-- Header bar (may need to change styling) -->
    <div class="display-1 font-weight-black">
      <v-card color="primary" class="white--text">
        <v-card-text align="center">Rescue Management System</v-card-text>
      </v-card>
    </div>
    
    <!-- Login card at center of page -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12 font-weight-bold">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field id="user"
                    type="text"
                    required
                    prepend-icon="person"
                    name="username"
                    label="User ID"
                    v-validate="'required|alpha_num'"
                    :class="{ 'is-invalid': submitted && !username }"
                    :rules="[v => !!v || 'User ID is required']"
                  ></v-text-field>
                  <v-text-field id="password"
                    type="password"
                    required
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    v-validate="'required'"
                    :class="{ 'is-invalid': submitted && !password }"
                    :rules="[v => !!v || 'Password is required']"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                  @click.prevent="handleSubmit"
                  to='/main'
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <!-- Copyright footer -->
    <v-footer class="pa-3" color="primary">
      <v-spacer></v-spacer>
      <div class="white--text">&copy; Fall {{ new Date().getFullYear() }}  Team Doge</div>
    </v-footer>

  </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

import { router } from '../helpers'

Vue.use(VeeValidate)

export default {
  name: "LoginPage",
  data: () => ({
    username: '',
    password: '',
    submitted: false,
    drawer: null
  }),
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
          router.push('/main')
        }
      });
    }
  }
};
</script>