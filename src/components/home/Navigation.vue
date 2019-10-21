<template>
  <div class="Navigation">
    <div class="Navigation-idx-header">
      <div class="Navigation-idx-one">
        <div class="Navigation-idx-img">
          <img src="//css.gomein.net.cn/plus/style/index/images/grass_logo.png?v=2017092001" alt />
        </div>
      </div>
      <div class="Navigation-idx-two">
        <van-icon name="search" class="Navigation-idx-icon" />
        <input type="text" value="华为Mate 30新品上市" @click="tiaozhuan" />
      </div>
      <div class="Navigation-idx-tree">
        <router-link to="/cart">
          <div class="Navigation-idx-tree-left">
            <img src="//css.gomein.net.cn/plus/style/index/images/grass_cart.png?v=2017092001" alt />
          </div>
        </router-link>
        <router-link to="/my">
          <div class="Navigation-idx-tree-right">登录</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "Navigation",
  methods: {
    tiaozhuan () {
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped>
.Navigation-idx-header {
  display: flex;
  width: 100%;
  background: red;
   height: 52.8px;
  padding-left: 12px;
  padding-right: 12px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.Navigation-idx-one {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.Navigation-idx-img {
  width: 28.8px;
  height: 28.8px;
}
.Navigation-idx-img img {
  width: 100%;
  height: 100%;
}
.Navigation-idx-two {
  flex: 4;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
}
.Navigation-idx-icon {
  position: absolute;
  top: 18px;
  left: 20px;
  color: #666;
}
.Navigation-idx-two input {
  width: 100%;
  border-radius: 16px;
  height: 34px;
  cursor: default;
  border: 0;
  background-color: #f6f6f6;
  color: #999;
  font-size: 12px;
  padding-left: 30px;
}
.Navigation-idx-tree {
  flex: 1;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.Navigation-idx-tree-left {
  width: 26.39px;
  height: 23.39px;
}
.Navigation-idx-tree-left img {
  width: 100%;
  height: 100%;
}
.Navigation-idx-tree-right {
  width: 40px;
  line-height: 50px;
  font-size: 14px;
  color: #666;
  margin-left: 20px;
}
</style>