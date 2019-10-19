<template>
  <div class="shop_logo">
    <div class="shop_logo_img">
      <img src="https://gfs13.gomein.net.cn/T1ArWjBXdT1RCvBVdK.jpg" alt />
    </div>
    <div class="shop_logo_name">
      海尔官方旗舰店
      <span>国美自营</span>
    </div>
    <div class="shop_logo_right">
      <van-icon name="arrow" size="16px" color="#a2a4a6" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "shopLogo"
};
</script>

<style>
.shop_logo {
  width: 100%;
  height: 72px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.shop_logo .shop_logo_img {
  width: 28%;
}
.shop_logo .shop_logo_img img {
  width: 81.59px;
  height: 33.59px;
}
.shop_logo .shop_logo_name {
  width: 62%;
  color: #262c32;
}
.shop_logo .shop_logo_name span {
  width: 55px;
  height: 18px;
  background-color: #f41266;
  font-size: 12px;
  color: #fff;
  padding: 1px;
}
.shop_logo .shop_logo_right {
  width: 10%;
  text-align: right;
}
</style>