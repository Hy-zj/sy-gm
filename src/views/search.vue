<template>
  <div class="searchone">
    <div class="searchone">
      <div class="searchone-header">
        <div class="searchone-header-one" @click="backHome">取消</div>
        <div class="searchone-header-two">
          <div class="searchone-icon-main">
            <div class="searchone-icon-main-one" v-if="show">商品</div>
            <div class="searchone-icon-main-one" v-else>店铺</div>
            <div class="searchone-icon-main-tree" @click="change"></div>
          </div>
          <input type="text" placeholder="冰箱洗衣机套购7.5折起" v-model="$store.state.message" @mousedown="changeone" @keyup.enter="tiaozhuan()"/>
         <div class="searchone-icon"> <a href="https://prom.m.gome.com.cn/html/prodhtml/topics/201710/12/salerxYredi657e.html?from=1"><van-icon name="search" /></a></div>
        </div>
      </div>
      <div class="searchone-nav">热词搜索</div>
      <div class="searchone-main">
        <div class="searchone-main-item">iphone 11</div>
        <div class="searchone-main-item">香肠派队</div>
        <div class="searchone-main-item">苹果手机</div>
        <div class="searchone-main-item">空调</div>
        <div class="searchone-main-item">冰箱</div>
        <div class="searchone-main-item">海尔洗衣机</div>
        <div class="searchone-main-item">华为手机</div>
        <div class="searchone-main-item">小米电视</div>
      </div>
      <div class="searchone-footer">
        <ul>
          <li>搜索历史</li>
          <li v-for="item in $store.state.searchoneList" :key="item.id">{{item}}</li>
        </ul>
        <div class="searchone-footer-del"><span @click="del">清空历史记录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name: "search",
  data() {
    return {
      show: true,
      // searchoneList:　[],
      // message : ""
    }
  },
  methods: {
    change () {
      this.show = !this.show 
    },
    del () {
      this.$store.commit('delOver')
    },
    changeone () {
      document.querySelector('input').placeholder = ""
    },
    tiaozhuan () {
      // this.$router.push("/home")
      // this.searchoneList.push(this.message)
      this.$store.commit('runGo')
      this.$store.commit('delShop')
      this.$router.push("/searchList")
    },
    backHome () {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
.searchone {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.searchone-header {
  width: 100%;
  height: 52.8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.searchone-header-one {
  width: 57px;
  text-align: center;
  font-size: 14px;
  color: #666;
  padding-left: 20px;
}
.searchone-header-two {
  width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
}
.searchone-header-two input {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 12px;
  color: #333;
  padding-left: 100px;
}
.searchone-nav {
  width: 100%;
  line-height: 48px;
  padding-left: 20px;
  font-size: 12px;
  color: #333;
}
.searchone-main {
  width: 100%;
  display: flex;
  height: 100px;
  padding: 0 20px;
  flex-wrap: wrap;
  align-items: center;
}
.searchone-main-item {
  margin: 0 15px 0 0;
  border: 1px solid #ccc;
  border-radius: 15px;
  font-size: 12px;
  line-height: 30px;
  text-align: center;
  color: #666;
  padding: 0 3px;
}
.searchone-footer {
  width: 100%;
  height: 100%;
}
.searchone-footer ul{
  width: 100%;
  height: 100%;
  list-style: none;
}
.searchone-footer ul li{
  width: 100%;
  line-height: 48px;
  color: #333;
  font-size: 12px;
  display: flex;
  padding-left: 20px;
  border-radius: 0;
}
.searchone-footer-del{
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.searchone-footer-del span{
  width: 224px;
  line-height: 36px;
  border-radius: 15px;
  border: 1px solid #ccc;
  color: #666;
  text-align: center;
}
.searchone-icon{
  position: fixed;
  top: 18px;
  right: 25px;
}
.searchone-icon-main{
  width: 65px;
  height: 25px;
  position: fixed;
  top: 18px;
  left: 25%;
  z-index: 10;
  font-size: 14px;
  color: #ccc;
  display: flex;
}
.searchone-icon-main-one{
   width: 45px;
  height: 25px;
  position: fixed;
  top: 18px;
  left: 25%;
  z-index: 10;
  font-size: 14px;
  color: red;
  display: flex;
}
.searchone-icon-main-tree{
   width: 0;
  height: 0;
  position: fixed;
  top: 24px;
  left: 35%;
  z-index: 10;
  border: 8px solid #f8f8f8;
  border-top: 8px solid red; 
}
</style>