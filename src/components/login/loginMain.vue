<template>
  <div>
    <div class="loginMain">
    <div class="loginMain-one">
      <div class="loginMain-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/daifukuai.png?v=2017092001" alt="">
      </div>
      <p class="loginMain-one-desc">
        待付款
      </p>
    </div>
    <div class="loginMain-one">
      <div class="loginMain-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/daishouhuo.png?v=2017092001" alt="">
      </div>
      <p class="loginMain-one-desc">
        待收货
      </p>
    </div>
    <div class="loginMain-one">
      <div class="loginMain-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/daipingjia.png?v=2017092001" alt="">
      </div>
      <p class="loginMain-one-desc">
        待评价
      </p>
    </div>
    <div class="loginMain-one1">
      <div class="loginMain-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/tuihou.png?v=2017092001" alt="">
      </div>
      <p class="loginMain-one-desc">
        退款/售后
      </p>
    </div>
    <div class="loginMain-two">
      <div class="loginMain-one-img">
        <img src="//app.gomein.net.cn/plus/images/ucenter/dingdan.png?v=2017092001" alt="">
      </div>
      <p class="loginMain-one-desc">
        全部订单
      </p>
      <p class="loginMain-one-ico">
        查看电子发票
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "loginMain"
}
</script>

<style>
.loginMain{
  width: 100%;
  height: 96px;
  display: flex;
  margin-bottom: 10px;
}
.loginMain-one{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  background: #fff;
}
.loginMain-one1{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   border-bottom: 1px solid white;
  background: #fff;
}
.loginMain-two{
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #666;
  background: rgb(252, 252, 252);
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(252, 252, 252);
}
.loginMain-one-img{
  width: 24.5px;
  height: 24.5px;
}
.loginMain-one-img img{
  width: 100%;
  height: 100%;
}
.loginMain-one-desc{
  width: 75px;
  line-height: 17.5px;
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: 5px;
}
.loginMain-one-ico{
  width: 75px;
  line-height: 14px;
  text-align: center;
  font-size: 10px;
  color: #666;
  margin-top: 5px;
}
</style>