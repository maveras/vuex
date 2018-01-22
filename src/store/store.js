import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    getValue: state => {
      return state.value
    }
  },
  mutations: {
  	increment: (state, payload) => {
  		state.counter =+ payload
  	},
  	decrement: (state, payload) => {
  		state.counter =- payload
  	},
    changeValue: (state, payload) => {
      state.value = payload
    }
  },
  actions: {
  	asyncIncrement: ({ commit }, payload) => {
  		setTimeout(()=>{
  			commit('increment', payload.by)
  		}, payload.duration)
  	},
  	asyncDecrement: ({ commit }, payload) => {
  		setTimeout(()=>{
  			commit('decrement', payload.by)
  		}, payload.duration)
  	},
    changeValue: ({commit}, payload) => {
      commit('changeValue', payload)
    }
  }
})