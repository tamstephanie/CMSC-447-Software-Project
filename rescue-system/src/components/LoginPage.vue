<template>
  <div class="login">
    <md-content>
      <h2>{{ msg }}</h2>
      <md-card>
        <md-field md-clearable>
          <label>User ID</label>
          <md-input id="username" v-model="initial" required="true"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input id="password" v-model="password" type="password" required="true"></md-input>
        </md-field>
      </md-card>

      <div id="login-button">
        <md-button class="md-raised md-primary">Login</md-button>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      msg: "User Login",
      username: "",
      password: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-content {
  justify-content: center;
  padding: 50px;
}
h2 {
  font-size: 36px;
}
.md-card {
  width: 350px;
  height: 175px;
  margin: 15px;
  padding: 15px;
  display: inline-block;
  justify-content: center;
}
.md-button {
  font-size: 20px;
  color: #ffffff;
  width: 100px;
  height: 60px;
  background-color: #d70000;
  margin: 5px;
}
</style>
