<template>
  <div>
    <div class="cartXq">
      <div class="cartXq-header">
        <div class="cartHeader">
          <div class="cartHeader-one" @click="change">
            <van-icon name="arrow-left" />
          </div>
          <div class="cartHeader-two">购物车</div>
          <div class="cartHeader-tree">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAANCAYAAAAwqJfrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkVCRjVFMTYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkVCRjVFMjYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRUJGNURGNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRUJGNUUwNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UorgpQAAARdJREFUeNrUllEOgjAMhgvxBJBwAn0jMfHZFzgE3EDjHcBE8Q4cBx58VwNvegW4ArbLWCqZ6AtL+JNmXeEbJesKVtd10CtN0zUOB7Qt2grtiXZFy9EeMK5J2CzLFGv1yWKiZxpGFryMXJ+UxYRTlewfiY491AhLCVtJktAW3Puo7/sQBAG4rgtN00BZllBVFQc3CN5Y2RhjF7JWFBDHsbrqeR5EUSR8BtL9O+YbY21Z1EL0ZjoN4ludb4K15ekToi3QyXEcPl0y3yhryzYhRLWiU9u2fPpivlHWlv1MqCgKLTSIX3W+CXYhm/aeZnVdA7WyMAzVqSSA4kz5wDfGzqrPUhkAOkccTj+AbwtPzn58webyb/AWYAAoKep22aBcgwAAAABJRU5ErkJggg=="
              @click="toggle"
            />
            <DropDownTab v-show="tab"></DropDownTab>
          </div>
        </div>
      </div>
      <div class="cartXq-main">
        <div class="cartXq-main-conter" v-for="(item,i) in goodsList" :key="item.id">
          <div class="cartXq-main-nav" ref="cartXqOne" v-if="btnFlag">
            <div class="cartXq-main-nav-one">
              <van-checkbox v-model="checked" class="checkbox" checked-color="red"></van-checkbox>
            </div>
            <div class="cartXq-main-nav-two">
              <img src="//gfs10.gomein.net.cn/T1HPJTBCb_1RCvBVdK.png" alt />
            </div>
            <div class="cartXq-main-nav-tree">
              荣丽强生活电器专营店
              <span class="cartXq-main-nav-tree-icon">
                <van-icon name="arrow" />
              </span>
            </div>
          </div>
          <div class="cartXq-main-shop">
            <div></div>
            <div class="cartXq-main-shop-list">
              <div class="cartXq-main-shop-list-top">
                <div class="cartXq-main-shop-list-top-left">
                  <!-- 定义上屏的状态然后添加change事件并传递商品id和状态 -->
                  <van-checkbox  @click="selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])" :value="$store.getters.getGoodsSelected[item.id]" class="checkbox" checked-color="red"></van-checkbox>
                </div>
                <div class="cartXq-main-shop-list-top-right">
                  <div class="cartXq-main-shop-list-top-right-left">
                    <img :src="item.imgurl" alt />
                  </div>
                  <div class="cartXq-main-shop-list-top-right-right">
                    <div
                      class="cartXq-main-shop-list-top-right-right-one"
                    >{{item.desc}}</div>
                    <div class="cartXq-main-shop-list-top-right-right-two">{{item.title}}</div>
                    <div class="cartXq-main-shop-list-top-right-right-tree">限购99件</div>
                    <div class="cartXq-main-shop-list-top-right-right-four">
                      <span class="cartXq-main-shop-list-top-right-right-four-left">￥{{item.price}}</span>
                      <span class="cartXq-main-shop-list-top-right-right-four-right">
                        <!-- <van-stepper ref="numbox" @change="countChange" :value="$store.getters.getGoodsCount[item.id]" button-size="18px" />
                        $store.getters.getGoodsCount[item.id] -->
                        <stapers :goodsid="item.id" :initcount="$store.getters.getGoodsCount[item.id]"></stapers>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cartXq-main-shop-list-bottom">
                <span class="cartXq-main-shop-list-bottom-one">加入收藏</span>
                <!-- 定义删除购物车商品的事件 -->
                <span class="cartXq-main-shop-list-bottom-two" @click="remove(item.id,i)">移除</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cartXq-tui">
            <cartMain></cartMain>
          </div>
      </div>

      <div class="cartXq-footer">
          <van-submit-bar :price="$store.getters.getGoodsCountAndAmount.amount*100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox ref="allselected" class="checkbox" checked-color="red" @click="allChange">全选</van-checkbox>
          </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, SubmitBar, Icon, Stepper } from "vant";
import axios from 'axios'
import VueAxios from 'vue-axios'
import stapers from '../../pulic/stapers'

Vue.use(VueAxios, axios)

Vue.use(SubmitBar, Checkbox, Icon, Stepper);
import cartMain from "../../cart/cartMain";
import DropDownTab from "../../pulic/DropDownTab";
export default {
  name: "cartXq",
  data() {
    return {
      btnFlag: true,
      checked: true,
      tab: false,
      //购物车的商品数据
      goodsList: [
      ]
    };
  },
  components: {
    cartMain,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [Icon.name]: Icon,
    [Stepper.name]: Stepper,
    DropDownTab,
    stapers
  },
  methods: {
    scollTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 370) {
        that.btnFlag = false;
      } else {
        that.btnFlag = true;
      }
    },
    onSubmit() {},
    change() {
      this.$router.push('/searchList');
    },
    toggle() {
      this.tab = !this.tab;
    },
    //购物车上屏数据获取方法
    getGoodsList () {
      //首先我们查阅商品都是通过id来的所以我们先获取store中的所有商品的id用，隔开形成一个字符串
      var idArr = []
      this.$store.state.car.forEach(item=>{
        idArr.push(item.id)
      })
      //如果购物车中没有商品就直接返回
      if(idArr.length<=0){
         return
      }
      // console.log('1111111')
      //获取购物车上屏列表
      //+ idArr.join(",")
      //对加入购物车的产品进行赛选
      Vue.axios.get('/data/cardata.json').then((response) => {
        // console.log(response.data.data.message)
        if (response.data.code === 0) {
          response.data.data.message.some((item,index)=>{
            console.log(item.id)
            console.log(idArr)
            if ( idArr.join(",").includes(item.id)) {
              this.goodsList.push(item)
              console.log(this.goodsList)
            }
          })
        }
      })
    },
    
    //定义删除商品信息的方法
    remove(id,index){
      //点击删除按钮把本地的goodslist相关的数据删除并且把vuex中的数据清除
      this.goodsList.splice(index,1)
      this.$store.commit('removeFormCar',id)
    },
    //定义单选事件
    selectedChanged(id,val){
      console.log(val)
      val = !val
      this.$store.commit('updataGoodsSelected',{
        id,selected: val
      })
    },
    //定义全选点击事件
    allChange(){
      console.log(this.$refs.allselected)
    }
  },
  created() {
    window.addEventListener("scroll", this.scollTop);
    //调用获取购物车商品数据的方法
    this.getGoodsList()
  },
  mounted(){
    // console.log(this.$store.getters.getGoodsSelected[item.id])
  }
};
</script>

<style>
.cartXq {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cartXq-header {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
  border-bottom: 1px solid #f2f2f2;
  background: white;
}
.cartXq-main {
  width: 100%;
  height: 100%;
}
.cartXq-main-conter {
  width: 100%;
  background: #fff;
  overflow-y: auto;
}
.cartXq-main-nav {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 50px;
  padding: 0 12px;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  display: flex;
  align-items: center;
  z-index: 10;
}
.cartXq-main-nav-one {
  width: 40px;
  height: 17px;
}
.cartXq-main-nav-two {
  width: 37px;
  height: 17px;
  margin-left: 5px;
  margin-top: 5px;
}
.cartXq-main-nav-two img {
  width: 100%;
  height: 100%;
}
.cartXq-main-nav-tree {
  width: 160px;
  height: 16px;
  font-size: 14px;
  color: #333;
}
.cartXq-main-nav-tree-icon {
  margin: 20px 0 0 0;
}
.cartXq-main-shop {
  width: 100%;
  height: 100%;
  padding: 10px 12px;
}
.cartXq-main-shop-list {
  width: 100%;
  height: 197px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  box-shadow: 3px;
  margin-top: 84px;
}
.cartXq-main-shop-list-top {
  width: 100%;
  height: 127px;
  padding: 15px 15px 0 15px;
  margin-top: 10px;
  display: flex;
}
.cartXq-main-shop-list-top-left {
  width: 40px;
  height: 100%;
  margin-top: 30px;
  margin-left: -15px;
}
.cartXq-main-shop-list-top-right {
  flex: 1;
  padding-left: 10px;
  display: flex;
}
.cartXq-main-shop-list-top-right-right {
  flex: 1;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
.cartXq-main-shop-list-top-right-right-one {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 12px;
  color: #333;
  height: 60px;
}
.cartXq-main-shop-list-top-right-right-two {
  height: 14px;
  font-size: 12px;
  color: #333;
  margin-top: 5px;
  background: #f3f5f7;
  width: 60px;
  text-align: center;
}
.cartXq-main-shop-list-top-right-right-tree {
  width: 60px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  color: #333;
  margin-top: 5px;
  margin-left: 5px;
  border: 1px solid red;
  color: red;
}
.cartXq-main-shop-list-top-right-right-four {
  margin-top: 5px;
  display: flex;
}
.cartXq-main-shop-list-top-right-right-four-left {
  color: red;
}
.cartXq-main-shop-list-top-right-right-four-right {
  margin-left: 40px;
  height: 30px;
}
.cartXq-main-shop-list-top-right-left {
  width: 90px;
  height: 90px;
}
.cartXq-main-shop-list-top-right-left img {
  width: 100%;
  height: 100%;
}
.cartXq-main-shop-list-bottom {
  width: 100%;
  height: 26px;
  padding: 15px;
  margin-top: 10px;
  color: #333;
  display: flex;
  align-items: center;
}
.cartXq-main-shop-list-bottom-one {
  margin-left: 70%;
  width: 60px;
  font-size: 12px;
  border-right: 1px solid #ccc;
}
.cartXq-main-shop-list-bottom-two {
  width: 30px;
  font-size: 12px;
  margin-left: 5px;
}
.cartXq-tui {
  width: 100%;
  height: 100%;
}
.cartXq-footer {
  width: 100%;
  height: 50px;
  background: green;
  position: fixed;
  bottom: 0;
}
.checkbox {
  margin-left: 20px;
}
.van-icon-success:before {
  z-index: 0;
}
</style>