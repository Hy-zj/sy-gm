import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)
//我们将json字符串转化为对象
//每次进入网站是先读取本地存储的数据如果没有就给个空数组
var car = JSON.parse(localStorage.getItem('car')||'[]')
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
    message: "",
    //购物车数据
    car: car, //将购物车中的数据放入到这个里面
    // count: 0
    //搜索页面
    itemList: []
  },
  actions: {
    // increment (context) {
    //   context.commit('getdata')
    // }
  },
  mutations: {
    insert(state) {
      Vue.axios.get('/data/list-tab-title.json').then((response) => {
        state.itemObj = response.data.data;
      })
    },
    //获取商品数据
    getdata(state){
      Vue.axios.get('/data/cardata.json').then((response) => {
        state.itemList = response.data.data.message
        // console.log(response.data.data.message)
      })
    },
    //添加购物车功能
    //计数
    // increment(state){
    //   state.count++
    // },
    //添加到购物车
    addToCar(state,goodsInfo){
      //如果购物车中之前有这个商品 就加数量
      //如果没有就把商品push到car中
      //假设我们开始购物车没油这个数据
      var flag = false
      state.car.some(item=>{
        if (item.id == goodsInfo.id) {
          //之前购物车的商品数量加上现在的商品数量
          item.count += parseInt(goodsInfo.count)
          flag = true
          return true
        }
      })
      //如果判断不是重复的商品就添加商品
      if (!flag) {
        state.car.push(goodsInfo)
      }
      //当更新完car的数据之后就把他存到本地
      localStorage.setItem('car',JSON.stringify(state.car))
      alert('添加到购物车成功')
    },
    updataGoodsInfo(state,goodsInfo){
     //修改购物车中商品的值
     state.car.some(item=>{
      if (item.id == goodsInfo.id) {
        //之前购物车的商品数量加上现在的商品数量
        item.count = parseInt(goodsInfo.count)
        return true
      }
       //当修改完最新的car的数据之后就把他存到本地
       localStorage.setItem('car',JSON.stringify(state.car))
    })
    },
    //删除购物车上屏的方法
    removeFormCar(state,id){
      state.car.some((item,i)=>{
        if (item.id == id) {
          //删除对应的商品信息
          state.car.splice(i,1)
          return true
        }
        // console.log('ok')
      })
      //将删除完成后的商品的数据之后就把他存到本地
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    //添加商品数量
    addnum(state,goodsid){
      // console.log(goodsid)
      state.car.some((item)=>{
        if (item.id == goodsid) {
          item.count++
        }
      })
      localStorage.car = JSON.stringify(state.car)
    },
    //减少商品
    delnum(state,goodsid){
      // console.log(goodsid)
      state.car.some((item)=>{
        if (item.id == goodsid) {
          if (item.count>1) {
            item.count--
          }
        }
      })
      localStorage.car = JSON.stringify(state.car)
    },
    //定义单选事件的更新事件
    //info包含商品id和商品选中的状态
    updataGoodsSelected(state,info){
      state.car.some(item=>{
        if (item.id == info.id) {
          item.selected = info.selected
        }
      })
      //将最新的商品的数据之后就把他存到本地
      localStorage.setItem('car',JSON.stringify(state.car))
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
    },
    // optCount(state){
    //   return "当前的count值" + state.count
    // },
    //计算所有的数量
    getAllCount (state) {
     var c = 0;
     state.car.forEach(item=>{
       c = c + item.count
     })
     return c == 0?null:c
    },
    //获取商品id和数量
    getGoodsCount (state) {
      var o = {}
      //把商品遍历存储到o对象中
      state.car.forEach(item=>{
        o[item.id] = item.count
      })
      return o
    },
    //获取商品选中状态的方法、
    getGoodsSelected(state){
      var o = {}
      state.car.forEach(item=>{
        //以商品id为key把状态存到o对象中
        o[item.id] = item.selected
      })
      // console.log(o)
      return o
    },
    //定义计算总价的方法
    getGoodsCountAndAmount(state){
      var o = {
        count : 0,//勾选后的商品数量
        amount : 0//勾选后的上屏总价
      }
      state.car.forEach(item=>{
        if (item.selected) {
          //如果是勾选状态则把商品进行统计然后算总和
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})
export default store