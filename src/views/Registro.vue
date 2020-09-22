<template>
  <div id="Registro">
    <input type="text" v-model="newUser" placeholder="Ingresa tu correo" />
    <br />
    <input type="text" v-model="pass" placeholder="Ingresa tu contraseña" />
    <br />
    <button @click="registrar">Registrar</button>
  </div>
</template>

<script>
import { mapAction, mapState, mapActions } from "vuex";
export default {
  name: "Registro",
  data() {
    return {
      pass: 123,
    };
  },
  computed: {
    ...mapState(["newUser"]),
  },
  methods: {
    ...mapActions(["getUser", "registrarUser"]),
    registrar() {
      this.registrarUser({
        email: this.newUser,
        pass: this.pass,
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>