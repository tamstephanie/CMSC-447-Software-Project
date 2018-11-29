<template>
  <div class="login">
    <h1>{{ msg }}</h1>

    <md-form>
      <md-field md-clearable>
        <label>User ID</label>
        <md-input name="username" v-model="initial" required="true"></md-input>
      </md-field>

      <md-field :md-toggle-password="false">
        <label>Password</label>
        <md-input name="password" v-model="password" required="true"></md-input>
      </md-field>
    </md-form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      msg: 'User Login',
      username: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
