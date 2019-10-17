import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    itemObj: {},
    loginObj: {
      name: "huangyue",
      password: "123456",
    }
  },
  mutations: {
    insert(state) {
      Vue.axios.get('/data/list-tab-title.json').then((response) => {
        state.itemObj = response.data.data;
      })
    }
  },
  getters: {
    tabList: (state) => {
      return state.itemObj
    }
  }
})
export default store