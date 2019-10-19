<template>
  <div>
    <div class="loginNav">
      <div class="loginNav-top">
        <div class="loginNav-top-one">
          <a href="http://club.m.gome.com.cn/memberclub/mygiftbag">
            <van-icon name="gift-o" size="25px" color="#f2f2f2" />
          </a>
        </div>
        <div class="loginNav-top-two">
          <a href="https://u.m.gome.com.cn/message.html">
            <van-icon name="chat-o" size="25px" color="#f2f2f2" />
          </a>
        </div>
      </div>
      <div class="loginNav-bottom">
        <a href="https://u.m.gome.com.cn/show_user_info.html">
          <div class="loginNav-bottom-one"></div>
        </a>
        <div class="loginNav-bottom-two">
          <a href="https://u.m.gome.com.cn/show_user_info.html">
            <p class="loginNav-icon">gm_187^_^7461_enep</p>
          </a>
          <a href="https://u.m.gome.com.cn/gcoin_authentication.html#/">
            <p class="loginNav-icon1">未实名</p>
          </a>
        </div>
        <a href="https://u.m.gome.com.cn/my_level.html">
          <div class="loginNav-bottom-tree">会员</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "loginNav"
};
</script>

<style>
.loginNav {
  width: 100%;
  height: 100%;
  background: rgb(235, 19, 86);
  background-size: 100%;
  display: flex;
  flex-direction: column;
}
.loginNav-top {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
}
.loginNav-top-one {
  width: 30px;
  height: 25px;
  position: absolute;
  right: 40px;
  top: 10px;
  margin: 0 auto;
}
.loginNav-top-two {
  width: 30px;
  height: 25px;
  position: absolute;
  right: 5px;
  top: 10px;
  margin: 0 auto;
}
.loginNav-bottom {
  width: 100%;
  height: 80px;
  margin-top: 10px;
  position: relative;
}
.loginNav-bottom-one {
  position: absolute;
  left: 80px;
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: #ccc;
  margin-top: 10px;
}
.loginNav-bottom-two {
  position: absolute;
  left: 130px;
  width: 140px;
  height: 40px;
  display: flex;
  flex-direction: column;
  color: #ccc;
}
.loginNav-icon {
  width: 140px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
  color: #f2f2f2;
}
.loginNav-icon1 {
  width: 40px;
  max-height: 20px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #fff;
  background: #bbb;
  border-radius: 8px;
  color: #333;
  margin-top: 10px;
}
.loginNav-bottom-tree {
  position: absolute;
  top: 30px;
  right: 0px;
  width: 40px;
  height: 20px;
  background: red;
  color: #fff;
  font-size: 12px;
  border: 1px solid #f2f;
  border-radius: 8px;
  text-align: center;
}
</style>