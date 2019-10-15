<template>
  <div class="my">
    <div class="header">
      <a href>
        <van-icon name="arrow-left" class="arrow-left" />
      </a>
    </div>
    <div class="section">
      <div class="logo">
        <img src="https://misc.gomein.net.cn/plus/images/u/login/logo_xh.png?v=20190624" alt />
      </div>
      <div>
        <van-tabs v-model="active" class="tab_title_container" line-width="145px" color="#F20C59">
          <van-tab class="tab_title">
            <template v-slot:title>
              <span>账号密码登录</span>
            </template>
            <div class="account_login">
              <div class="user">
                <span class="icon_user"></span>
                <input type="text" id="username" placeholder="手机号/邮箱/用户名/门店会员卡号" />
                <span class="icon_clear"></span>
              </div>
              <div class="pwd">
                <span class="icon_password"></span>
                <input type="password" placeholder="请输入密码" />
                <span class="icon_seen"></span>
              </div>
              <div class="account-operation">
                <a href="https://reg.m.gome.com.cn/registered.html">手机号快速注册</a>
                <a href="https://m.gome.com.cn/find_password.html">找回密码</a>
              </div>
              <div class="login_btn">
                <button class="btn">登录</button>
              </div>
            </div>
          </van-tab>
          <van-tab class="tab_title">
            <template v-slot:title>
              <span>短信验证码登录</span>
            </template>
            <div class="message_login">
              <div class="tel">
                <span class="icon_user"></span>
                <input type="text" id="usertel" placeholder="手机号" />
              </div>
              <div class="code_list">
                <div class="pwd">
                  <span class="icon_msg"></span>
                  <div class="code_line">
                    <input type="text" placeholder="请输入短信验证码" />
                    <span class="icon_clear"></span>
                  </div>
                  <div class="get_code">获取验证码</div>
                  <span class="bottom_line"></span>
                </div>
              </div>
              <div class="login_btn">
                <button class="btn">同意协议注册并登录</button>
              </div>
              <span class="liscen">
                未注册手机登录成功将自动注册，且代表您已同意协议
                <a
                  href="https://m.gome.com.cn/register_boder.html"
                >《国美平台服务协议》</a>
                <a href="https://m.gome.com.cn/register_boder_privacy.html">《国美平台隐私政策》</a>
                <a href="https://m.gome.com.cn/meifubao_service_agreement.html">《美付宝服务协议》</a>
              </span>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="other">
        <span class="line"></span>
        <span class="txt">使用以下账户登录</span>
        <span class="line"></span>
      </div>
      <div class="other_login">
        <a href="https://login.m.gome.com.cn/membership_card.html">
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/mdhy.png" alt />
          <span>门店会员</span>
        </a>
        <a href>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt />
          <span>QQ</span>
        </a>
        <a href>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/weibo.png" alt />
          <span>新浪微博</span>
        </a>
        <a href>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/zfb.png" alt />
          <span>支付宝</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon, Tab, Tabs } from "vant";

Vue.use(Icon)
  .use(Tab)
  .use(Tabs);
export default {
  name: "my",
  data() {
    return {
      active: 2
     
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
}
.my{
  width: 100vw;
  height: 100vh;
}
.header {
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.header a {
  margin-left: 20px;
}
.header a .arrow-left {
  vertical-align: middle;
  font-size: 22px;
}
.section {
  width: 290px;
  height: 545px;
  margin: 10px auto;
}
.section .logo {
  width: 148px;
  height: 45px;
  margin: 0 auto;
}
.section .logo img {
  width: 100%;
  height: 100%;
}
.tab_title_container {
  width: 290px;
  text-align: center;
}
.tab_title {
  width: 145px;
  text-align: center;
}
.account_login {
  width: 290px;
}
.account_login .user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0 8px;
  border-bottom: 1px solid #dedede;
}
.account_login .pwd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0 8px;
  border-bottom: 1px solid #dedede;
}
.account_login input {
  outline: none;
  border: none;
  width: 90%;
  color: #dedede;
  font-size: 15px;
  padding-left: 8px;
}
.icon_user {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/icon_phone.2b4394b85b.png");
  background-size: 22px 22px;
}
.account_login .icon_password {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/images/u/login/icon_pwd.png?v=2017092001");
  background-size: 22px 22px;
}
.icon_clear {
  display: block;
  width: 13px;
  height: 13px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/close.91ce307578.png");
  background-size: 13px 13px;
}
.icon_seen {
  display: block;
  width: 16px;
  height: 16px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/noSee.f86edb4266.png");
  background-size: 16px 16px;
}
.account-operation {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.account-operation a {
  color: #78bee9;
  font-size: 15px;
}
.login_btn {
  width: 285px;
  height: 45px;
  margin: 30px auto;
}
.login_btn .btn {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ff80aa;
  color: #fff;
  border-radius: 20px;
}
.message_login {
  width: 290px;
}
.message_login .tel {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 40px 0 8px;
  border-bottom: 1px solid #dedede;
}
.message_login .pwd {
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 25px 0 8px;
  position: relative;
}

.message_login input {
  outline: none;
  border: none;
  width: 90%;
  color: #dedede;
  font-size: 15px;
  text-align: left;
  margin-left: 8px;
  
}
.message_login .icon_msg {
  display: block;
  width: 22px;
  height: 22px;
  background: url("https://misc.gomein.net.cn/plus/style/ucenter/css/mssageCheck.f3ca560a6d.png");
  background-size: 22px 22px;
}
.get_code {
  width: 120px;
  height: 32px;
  font-size: 13px;
  padding: 0px 10px;
  line-height: 32px;
  color: #f20c59;
  border: 1px solid #f20c59;
  border-radius: 50px;
}
.code_line {
  margin-right: 15px;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom_line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  background-color: #ddd;
  width: 60%;
}
.liscen {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: -20px;
}
.liscen a {
  font-size: 13px;
  color: #78bee9;
}
.other {
  margin-top: 90px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
}
.other .txt {
  color: #999;
  padding: 0 5px;
  vertical-align: -4px;
}
.other .line {
  display: inline-block;
  width: 80px;
  border-top: 1px solid #ccc;
}

.other_login {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 30px;
}
.other_login a {
  flex: 1;
  text-align: center;
}
.other_login img {
  width: 42px;
  height: 42px;
  margin: 0 15.25px 5px;
}
.other_login span {
  color: #666;
  font-size: 13px;
}
</style>