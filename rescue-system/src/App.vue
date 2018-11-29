<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">Rescue Management System</div>
      </md-card-header>
    </md-card>



    <img alt="Vue logo" src="./assets/logo.png">
    <LoginPage />
  </div>
</template>

<script>
import LoginPage from './components/Login'

export default {
  name: 'app',
  components: {
    LoginPage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
