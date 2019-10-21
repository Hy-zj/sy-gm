<template>
  <div>
    <div class="loginList">
    <div class="loginList-one">
      <div class="loginList-one-img">
        0.00
      </div>
      <p class="loginList-one-desc">
        国美币余额
      </p>
    </div>
    <div class="loginList-one">
      <div class="loginList-one-img">
        7
      </div>
      <p class="loginList-one-desc">
        优惠劵
      </p>
    </div>
    <div class="loginList-one">
      <div class="loginList-one-img">
        0
      </div>
      <p class="loginList-one-desc">
        美豆
      </p>
    </div>
    <div class="loginList-one1">
      <div class="loginList-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/meitongka.png?v=2017092001" alt="">
      </div>
      <p class="loginList-one-desc">
        美通卡
      </p>
    </div>
    <div class="loginList-two">
      <div class="loginList-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/qianbao.png?v=2017092001" alt="">
      </div>
      <p class="loginList-one-desc">
        我的钱包
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "loginList"
}
</script>

<style>
.loginList{
  margin-top: 20px;
  width: 100%;
  height: 83px;
  display: flex;
  margin-bottom: 10px;
}
.loginList-one{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  background: #fff;
}
.loginList-one1{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   border-bottom: 1px solid white;
  background: #fff;
}
.loginList-two{
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #666;
  background: rgb(252, 252, 252);
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(252, 252, 252);
}
.loginList-one-img{
  width: 24.5px;
  height: 24.5px;
  color: #666;
}
.loginList-one-img img{
  width: 100%;
  height: 100%;
}
.loginList-one-desc{
  width: 75px;
  line-height: 17.5px;
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: 5px;
}
</style>