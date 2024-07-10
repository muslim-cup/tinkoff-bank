import { createStore,createLogger } from 'vuex'
import auth from './modules/auth-login'
import request from './modules/request.module'
const plugins = []

if(import.meta.env === 'development') {
  plugins.push(createLogger())
  console.log(createLogger())
}

export default createStore({
  plugins,
  state() {
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setMessage(state,message){
      state.message = message
    },
    clearMessage(state) {
      state.message = null
    },
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },
  actions: {
    setMessage({commit}, message) {
      console.log(message)
      commit('setMessage', message)
        setTimeout(() => {
          commit('clearMessage')
        }, 5000)
      }
    },
  modules: {
    auth,
    request,
  }
})
