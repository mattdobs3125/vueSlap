import Vue from 'vue'
import Vuex from 'vuex'
import Target from './models/Target';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    target: new Target({
      health: 100,
      name: "ScarCrow",
      attacks:{
        kick : 5,
        slap : 1,
        punch : 5,
        h : 100
      },
     items:[]
    }),
    machine:{
      name: "Vendr"
    }
  },
  mutations: {
    setHealth(state,actualHealth){
      state.target.health = actualHealth
    }
  },

  actions: {
    attack({dispatch, commit, state},payload){
      let newHealth = state.target.health - state.target.attacks[payload]
      commit('setHealth',newHealth)
    }
  }
})
