<template>
  <v-app id="app">
    <v-content>
      <!-- Need to adjust view based on status:
       if loggedIn => <MainView /> 
       else <LoginPage /> -->
      <MainView />
    </v-content>
  </v-app>
</template>

<script>
// import LoginPage from './components/pages/LoginPage'
import MainView from './components/pages/MainView'

export default {
  name: 'App',
  components: {
    // LoginPage
    MainView
  },
  data() {
    return {
      //
    }
  }
}
</script>