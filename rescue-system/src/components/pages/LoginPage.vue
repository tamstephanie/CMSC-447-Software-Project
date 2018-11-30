<template>
  <v-app>
    <div class="display-1 font-weight-black">
      <v-card color="primary">
        <v-card-text align="center">Rescue Management System</v-card-text>
      </v-card>
    </div>
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
                  <v-text-field
                    id="user"
                    prepend-icon="person"
                    name="login"
                    label="User ID"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer class="pa-3" color="primary">
      <v-spacer></v-spacer>
      <div>&copy; Fall {{ new Date().getFullYear() }}  Team Doge</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "LoginPage",
  data: () => ({
    username: "",
    password: "",
    drawer: null
  })
};
</script>

<style scoped>
div {
  color: #ffffff;
}
template {
  overflow-y: hidden;
}
</style>