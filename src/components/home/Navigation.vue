<template>
  <div class="Navigation">
    <div class="idx-header">
      <div class="idx-one">
        <div class="idx-img">
          <img src="//css.gomein.net.cn/plus/style/index/images/grass_logo.png?v=2017092001" alt />
        </div>
      </div>
      <div class="idx-two">
        <van-icon name="search" class="idx-icon" />
        <input type="text" value="华为Mate 30新品上市" />
      </div>
      <div class="idx-tree">
        <div class="idx-tree-left">
          <img src="//css.gomein.net.cn/plus/style/index/images/grass_cart.png?v=2017092001" alt />
        </div>
        <div class="idx-tree-right">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name: "Navigation"
};
</script>

<style scoped>
.Navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 52.8px;
}
.idx-header {
  width: 375px;
  height: 52.8px;
  padding-left: 10px;
  padding-right: 10px;
  background: #fff;
  display: flex;
}
.idx-one {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.idx-img{
  width: 28.8px;
  height: 28.8px;
}
.idx-img img{
  width: 100%;
  height: 100%;
}
.idx-two {
  flex: 4;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
}
.idx-icon{
  position: absolute;
  top: 18px;
  left: 20px;
  color: #666;
}
.idx-two input{
 flex: 1;
 border-radius: 16px;
 height: 34px;
 cursor: default;
 border: 0;
 background-color: #f6f6f6;
 color: #999;
 font-size: 12px;
 padding-left: 30px;
}
.idx-tree {
  flex: 1;
  display: flex;
  align-items: center;
}
.idx-tree-left{
  width: 26.39px;
  height: 23.39px;

}
.idx-tree-left img{
  width: 100%;
  height: 100%;
}
.idx-tree-right{
  width: 40px;
  line-height: 50px;
  font-size: 14px;
  color: #666;
  margin-left: 10px;
}
</style>