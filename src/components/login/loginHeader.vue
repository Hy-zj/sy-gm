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
  width: 100%;
  height: 44px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  justify-content: center;
  text-align: center;
}
.loginHeader-one {
  width: 10%;
  line-height: 44px;
}
.loginHeader-two {
  width: 90%;
  line-height: 44px;
  font-size: 18px;
  color: #333;
  margin-left: -20px;
}
</style>