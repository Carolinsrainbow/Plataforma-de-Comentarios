
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newUser: "",
    users: [],
    currentUser: null,
    comments: []
  },
  mutations: {
    GET_USER(state, user) {
      state.newUser = user
    },
    REGISTRAR_USER(state, user) {
      state.users.push(user)
    },
    SET_USER(state, email) {
      state.currentUser = email
    },
    NEW_COMMENT(state,comment){
state.comments.push(comment)
    }
  },
  actions: {
    getUser(commit) {
      axios.get(`https://randomuser.me/api`).then((data) => {
        this.commit("GET_USER", data.data.results[0].email)
      })
    },
    registrarUser({
      commit
    }, user) {
      commit("REGISTRAR_USER", user)
    },
    loginUser({
      commit,
      state
    }, payload) {
      let user = payload[0]
      let res = state.users.find((u) => u.email == user.email && u.pass == user.pass)
      let router = payload[1]
      console.log(res)
      if (res) {
        commit('SET_USER', user.email)
        router.push({name: "Home"})
      } else {
        alert('no existe')
      }
    },
    newComment({commit},comment){
      commit("NEW_COMMENT", comment)
    }
  },
  modules: {}
})