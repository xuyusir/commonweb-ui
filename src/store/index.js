import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userState:"",
    userToken:""
  },
  getters:{
    getUserState:function(state){
      return state.userState
    }
  },
  mutations: {
    setUserStateMu:function(state,user){
      state.userState=user
      sessionStorage.setItem("userState",JSON.stringify(state.userState))
    },
    clearUserStateMu:function(state){
      state.userState=""
      sessionStorage.clear()
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
