<template>
    <div class = "login">
        <h1>{{ title }}</h1>
        
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
import Vue from 'vue'
import { MdField, MdInput } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdField)
Vue.use(MdInput)

export default {
    name: 'Login',
    props:{
        title: String
    },
    data: () => ({
        username: "",
        password: ""
    })
    // methods: {
    //     login() {
    //         if(this.input.username != "" && this.input.password != "") {
    //             // Need to validate username and password
    //             if(this.input.username == this.$parent.account.username && this.input.password == this.$parent.account.password) {
    //                 this.$emit("authenticated", true);
    //                 this.$router.replace({name: "secure" });
    //             }
    //             else {
    //                 console.log("The UserID and/or password is incorrect.")
    //             }
    //         }
    //         else {
    //           console.log("UserID and password must be present.")
    //         }  
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
