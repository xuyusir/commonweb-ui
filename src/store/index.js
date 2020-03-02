import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userState:""
  },
  mutations: {
    setUserStateMu:function(state,user){
      state.userState=user
    },
    clearUserStateMu:function(state){
      state.userState=""
    }
  },
  actions: {
    setUserState(context,user) {
      context.commit("setUserStateMu",user)
    },
    clearUserStateMu(context){
      context.commit("clearUserStateMu")
    }
  },
  modules: {
  }
})
