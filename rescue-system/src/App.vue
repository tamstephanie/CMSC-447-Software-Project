<template>
  <v-app>
    <v-content>
      <LoginPage />
    </v-content>
  </v-app>
</template>

<script>
import LoginPage from './components/pages/LoginPage'

export default {
  name: 'App',
  components: {
    LoginPage
  },
  data() {
    return {
      //
    }
  }
}
</script>