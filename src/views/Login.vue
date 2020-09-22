<template>
  <div id="Login">
    <input type="text" v-model="email" />
    <br />
    <input type="text" v-model="pass" />
    <br />
    <button @click="login">Ingresar</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Login",
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
     ...mapActions(["loginUser"]),
    login() {
      let user = {
        email: this.email,
        pass: this.pass,
      };
      let payload = [user, this.$router]
      this.loginUser(payload)
    },
  },
};
</script>