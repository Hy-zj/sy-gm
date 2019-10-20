import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    itemObj: {},
    //用户登录信息
    loginObj: {
      name: "huangyue",
      password: "123456",
    },
    //搜索页面信息
    searchoneList: [],
    message: ""
  },
  mutations: {
    insert(state) {
      Vue.axios.get('/data/list-tab-title.json').then((response) => {
        state.itemObj = response.data.data;
      })
    },
    demo(state,id){
      Vue.axios.get(`/data/${id}.json`).then(res=>{
        //数据处理
        console.log(res)
      }).catch(e=>{
        //错误处理
        console.log(e)
      })
    },
    //添加搜索信息方法
    runGo(state){
      state.searchoneList.push(state.message)
      localStorage.setItem('searchoneList',state.searchoneList)
    },
    //清楚搜索框信息
    delShop(state){
      state.message = ""
    },
    //清楚搜素列表信息
    delOver(state){
      state.searchoneList = []
    }
  },
  getters: {
    tabList: (state) => {
      return state.itemObj
    }
  }
})
export default store