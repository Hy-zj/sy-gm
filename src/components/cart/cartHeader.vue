<template>
  <div class="cartHeader">
    <div class="cartHeader-one">
      <van-icon name="arrow-left" />
    </div>
    <div class="cartHeader-two">购物车</div>
    <div class="cartHeader-tree"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "cartHeader"
};
</script>

<style>
.cartHeader {
  width: 351px;
  height: 44px;
  margin: 0 12px;
  background: red;
  display: flex;
}
.cartHeader-one {
  width: 35.5px;
  line-height: 44px;
  text-align: center;
}
.cartHeader-two {
  width: 54px;
  line-height: 44px;
  background: blue;
  font-size: 18px;
  color: #333;
  margin: 0 auto;
  text-align: center;
}
.cartHeader-tree {
}
</style>