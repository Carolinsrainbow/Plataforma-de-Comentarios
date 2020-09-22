<template>
  <div class="Home">
    <div class="row">
      <div class="col-3">
        <textarea v-model="message" cols="30" rows="10"></textarea>
        <br>
        <button @click="addComent">Agregar Comentario</button>
      </div>
           <div class="col-9">
             <input  v-model="filtro" type="text" placeholder="Ingresa palabras claves" >
             <div v-for="(comment,i) in comentariosFiltrados" :key="i">
             <h6>{{comment.email}}</h6>
             <p>{{comment.message}}</p>
             </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
  name: 'Home',
  data(){
    return{
      message: "",
      filtro: ""
    }
  },
  computed: {
...mapState(["comments","currentUser"]),
comentariosFiltrados(){
  return this.comments.filter(c=> c.message.includes(this.filtro))
  .reverse()
}
  },
  methods: {
    ...mapActions(["newComment"]),
    addComent(){
      this.newComment({
        email: this.currentUser,
        message: this.message
      })

    }
  }

}
</script>
