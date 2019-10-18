import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import list from '../views/list.vue'
import goodSelect from '../views/goodSelect.vue'
import cart from '../views/cart.vue'
import my from '../views/my.vue'
import loginMy from '../views/loginMy.vue'
import detail from '../views/details.vue'
import search from '../views/search.vue'
import searchList from '../views/searchList.vue'
import evaluate from '../components/details/evaluate/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: home
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/goodSelect',
      component: goodSelect
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/my',
      component: my
    },
    {
      path: '/loginMy',
      component: loginMy
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchList',
      component: searchList
    },
    {
      path: '/evaluate',
      component: evaluate
    },
    {
      path: '*',
      component: home
    }
  ]
})