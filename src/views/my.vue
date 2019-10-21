<template>
  <div class="my">
    <div class="my-header">
      <a href>
        <van-icon name="arrow-left" class="my-arrow-left" />
      </a>
    </div>
    <div class="my-section">
      <div class="my-logo">
        <img src="https://misc.gomein.net.cn/plus/images/u/login/logo_xh.png?v=20190624" alt />
      </div>
      <div>
        <van-tabs
          v-model="active"
          class="my-tab_title_container"
          line-width="145px"
          color="#F20C59"
        >
          <van-tab class="my-tab_title">
            <template v-slot:title>
              <div>
                <span>账号密码登录</span>
              </div>
            </template>
            <div class="my-account_login">
              <div class="my-user">
                <span class="my-icon_user"></span>
                <input type="text"  id="inp"  placeholder="手机号/邮箱/用户名/门店会员卡号"  v-model="$store.state.loginObj.name"  />
                <span class="my-icon_clear" @click="clearEvent1"></span>
              </div>
              <div class="my-pwd">
                <span class="my-icon_password"></span>
                <input  type="password"  placeholder="请输入密码"  v-model="$store.state.loginObj.password"  @input="change"  id="psd"
                />
                <span class="my-icon_clear my_icon_clear" @click="clearEvent2"></span>
                <span class="my-icon_noseen" @click="seenEvent" v-if="seen"></span>
                <span class="my-icon_seen" @click="noseen" v-else></span>
              </div>
              <div class="my-account-operation">
                <a href="https://reg.m.gome.com.cn/registered.html">手机号快速注册</a>
                <a href="https://m.gome.com.cn/find_password.html">找回密码</a>
              </div>
              <div class="my-login_btn">
                <button class="my-btn" @click="login">登录</button>
              </div>
            </div>
          </van-tab>
          <van-tab class="my-tab_title">
            <template v-slot:title>
              <div>
                <span>短信验证码登录</span>
              </div>
            </template>
            <div class="my-message_login">
              <div class="my-tel">
                <span class="my-icon_user"></span>
                <input type="text" id="usertel" placeholder="手机号" />
                <span class="my-icon_clear my_icon-clear" @click="clearEvent3"></span>
              </div>
              <div class="my-code_list">
                <div class="my-pwd">
                  <span class="my-icon_msg"></span>
                  <div class="my-code_line">
                    <input type="text" placeholder="请输入短信验证码" id="msg" />
                    <span class="my-icon_clear" @click="clearEvent4"></span>
                  </div>
                  <div class="my-get_code">获取验证码</div>
                  <span class="my-bottom_line"></span>
                </div>
              </div>
              <div class="my-login_btn">
                <button class="my-btn">同意协议注册并登录</button>
              </div>
              <span class="my-liscen"> 未注册手机登录成功将自动注册，且代表您已同意协议
                <a  href="https://m.gome.com.cn/register_boder.html">《国美平台服务协议》</a>
                <a href="https://m.gome.com.cn/register_boder_privacy.html">《国美平台隐私政策》</a>
                <a href="https://m.gome.com.cn/meifubao_service_agreement.html">《美付宝服务协议》</a>
              </span>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <myFooter></myFooter>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Tab, Tabs } from "vant";
import myFooter from "../components/my/myFooter";
Vue.use(Icon).use(Tab).use(Tabs);
export default {
  name: "my",
  components: {
    myFooter
  },
  data() {
    return {
      active: 2,
      seen: true
    };
  },
  methods: {
    change() {
      console.log(window.document.getElementsByClassName("my-btn"));
      var vant = window.document.getElementsByClassName("my-btn")[0];
      vant.style.cssText = "background-color: red;color: #333;";
    },
    login() {
      if (
        this.$store.state.loginObj.name &&
        this.$store.state.loginObj.password
      ) {
        this.$router.push("/loginMy");
        (this.$store.state.loginObj.name = ""),
          (this.$store.state.loginObj.password = "");
      }
    },
    seenEvent() {
      this.seen = !this.seen;
      document.querySelector("#psd").type = "text";
    },
    noseen() {
      this.seen = !this.seen;
      document.querySelector("#psd").type = "password";
    },
    clearEvent1() {
      document.querySelector("#inp").value = "";
    },
    clearEvent2() {
      document.querySelector("#psd").value = "";
    },
    clearEvent3() {
      document.querySelector("#usertel").value = "";
    },
    clearEvent4() {
      document.querySelector("#msg").value = "";
    }
  }
};
</script>

<style>
.active {
  color: #f20c59;
}
.text-danger {
  color: black;
}
.my_icon_clear {
  padding-right: 20px;
}
.my_icon-clear {
  margin-top: 10px;
}
.my {
  width: 100vw;
  height: 100vh;
}
.my-header {
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.my-header a {
  margin-left: 20px;
}
.my-header a .my-arrow-left {
  vertical-align: middle;
  font-size: 22px;
}
.my-section {
  width: 290px;
  height: 545px;
  margin: 10px auto;
}
.my-section .my-logo {
  width: 148px;
  height: 45px;
  margin: 0 auto;
}
.my-section .my-logo img {
  width: 100%;
  height: 100%;
}
.my-tab_title_container {
  width: 290px;
  text-align: center;
}
.my-tab_title {
  width: 145px;
  text-align: center;
}
.my-account_login {
  width: 290px;
}
.my-account_login .my-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 8px;
  border-bottom: 1px solid #dedede;
}
.my-account_login .my-pwd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 8px;
  border-bottom: 1px solid #dedede;
}
.my-account_login input {
  outline: none;
  border: none;
  width: 90%;
  color: #dedede;
  font-size: 15px;
}
.my-icon_user {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/icon_phone.2b4394b85b.png");
  background-size: 22px 22px;
}
.my-account_login .my-icon_password {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/images/u/login/icon_pwd.png?v=2017092001");
  background-size: 22px 22px;
}
.my-icon_clear {
  display: block;
  width: 13px;
  height: 13px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/close.91ce307578.png");
  background-size: 13px 13px;
  background-repeat: no-repeat;
  margin-left: 5px;
}
.my-icon_noseen {
  display: block;
  width: 16px;
  height: 16px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/noSee.f86edb4266.png");
  background-size: 16px 16px;
}
.my-icon_seen {
  display: block;
  width: 16px;
  height: 16px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/see.a79f6fcb48.png");
  background-size: 16px 16px;
}
.my-account-operation {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.my-account-operation a {
  color: #78bee9;
  font-size: 15px;
}
.my-login_btn {
  width: 285px;
  height: 45px;
  margin: 30px auto;
}
.my-login_btn .my-btn {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ff80aa;
  color: #fff;
  border-radius: 20px;
}
.my-message_login {
  width: 290px;
}
.my-message_login .my-tel {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 40px 0 8px;
  border-bottom: 1px solid #dedede;
}
.my-message_login .my-pwd {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 25px 0 8px;
  position: relative;
}

.my-message_login input {
  outline: none;
  border: none;
  width: 90%;
  color: #dedede;
  font-size: 15px;
  text-align: left;
  /* margin-left: 8px; */
}
.my-message_login .my-icon_msg {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/mssageCheck.f3ca560a6d.png");
  background-size: 22px 22px;
}
.my-get_code {
  width: 120px;
  height: 32px;
  font-size: 13px;
  padding: 0px 10px;
  line-height: 32px;
  color: #f20c59;
  border: 1px solid #f20c59;
  border-radius: 50px;
}
.my-code_line {
  margin-right: 15px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-bottom_line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  background-color: #ddd;
  width: 60%;
}
.my-liscen {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: -20px;
}
.my-liscen a {
  font-size: 13px;
  color: #78bee9;
}
</style>