<template>
  <div class="loginHeader">
    <div class="loginHeader-one" @click="change">
      <van-icon name="arrow-left" />
    </div>
    <div class="loginHeader-two">我的国美</div>
    <div class="loginHeader-tree"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "loginHeader",
  methods: {
    change () {
      this.$router.push('/home')
    }
  }
};
</script>

<style>
.loginHeader {
  width: 351px;
  height: 44px;
  margin: 0 12px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
}
.loginHeader-one {
  width: 35.5px;
  line-height: 44px;
  text-align: center;
}
.loginHeader-two {
  width: 79px;
  line-height: 44px;
  font-size: 18px;
  color: #333;
  margin: 0 auto;
  text-align: center;
}
</style>