<template>
  <div>
    <div class="my-other">
      <span class="my-line"></span>
      <span class="my-txt">使用以下账户登录</span>
      <span class="my-line"></span>
    </div>
    <div class="my-other_login">
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
</template>

<script>
export default {
  name: "myFooter"
};
</script>

<style>
.my-other {
  margin-top: 90px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 15px;
}
.my-other .my-txt {
  color: #999;
  padding: 0 5px;
  vertical-align: -4px;
}
.my-other .my-line {
  display: inline-block;
  width: 80px;
  border-top: 1px solid #ccc;
}
.my-other_login {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 30px;
}
.my-other_login a {
  flex: 1;
  text-align: center;
}
.my-other_login img {
  width: 42px;
  height: 42px;
  margin: 0 15.25px 5px;
}
.my-other_login span {
  color: #666;
  font-size: 13px;
}
</style>