<template>
  <div class="homeSp">
    <div class="homeSp-left">
      <div class="home-left-one">
        <div>
          <img src="//gfs10.gomein.net.cn/wireless/T1fyDjBjZ_1RCvBVdK_120_28.png" alt="">
        </div>
        <span>
          <van-count-down :time="time" />
        </span>
      </div>
      <div class="home-left-two">
        <div class="icon">
          <div class="icon1">
            <img src="//gfs17.gomein.net.cn/T1HKxQBmdv1RCvBVdK_160.jpg" alt="">
          </div>
          <div class="icon2">￥11.9</div>
          <del class="icon3">￥12</del>
        </div>
        <div class="icon">
          <div class="icon1">
            <img src="//gfs17.gomein.net.cn/T19PhTByhv1RCvBVdK_160.jpg" alt="">
          </div>
          <div class="icon2">￥169</div>
          <del class="icon3">￥179</del>
        </div>
        <div class="icon">
          <div class="icon1">
            <img src="//gfs17.gomein.net.cn/T1bjCsByCT1RCvBVdK_160.jpg" alt="">
          </div>
          <div class="icon2">￥399</div>
          <del class="icon3">￥429</del>
        </div>
      </div>
    </div>
    <div class="homeSp-right">
      <div class="homeSp-right-one">
       值得买
      </div>
      <div class="homeSp-right-two">
        大家都在买
      </div>
      <div class="homeSp-right-tree">
        <img src="//gfs12.gomein.net.cn/wireless/T1VECyBXCv1RCvBVdK_355_144.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
export default {
  name: "homeSp",
   data() {
    return {
      time: 3 * 49 * 27 * 1000
    };
  }
};
</script>

<style scoped>
.homeSp {
  width: 351px;
  height: 138.88px;
  margin: 0 auto;
  border: 1px solid #f2f2f2;
  background: white;
  display: flex;
  margin: 0 auto;
}
.homeSp-left{
  flex: 1;
  border-right: 2px solid #f2f2f2;
  display: flex;
  flex-direction: column;
}
.homeSp-right{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.home-left-one{
  width: 100%;
  height: 17.34px;
  display: flex;
  margin-top: 12px;
  padding-left: 12px;
}
.home-left-one div{
  width: 76.8px;
  height: 19.1px;
}
.home-left-one div img{
  width: 100%;
  height: 100%;
}
.home-left-one span{
  font-size: 12px;
  color: #f20c59;
  border: 1px solid #f20c59;
  border-radius:8px;
  padding-left: 5px;
  width: 66px;
  height: 18.39px;
  margin-left: 10px;
}
.home-left-two{
  display: flex;
}
.homeSp-right-one{
  height: 19px;
  font-size: 16px;
  color: #fd851d;
  margin: 0 0 3.6px;
  padding: 0 0 0 12px;
  margin-top: 12px;
}
.homeSp-right-two{
  height: 16px;
  font-size: 12px;
  color: #666;
  padding: 0 0 0 12px;
}
.icon{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.icon1{
  width: 54.06px;
  height: 54.06px;
}
.icon1 img{
  width: 100%;
  height: 100%;
}
.icon2{
  width: 33.03px;
  line-height: 19px;
  color: #333;
  font-size: 12px;
  text-align: center;
}
.icon3{
  width: 33.03px;
  line-height: 19px;
  color: #919599;
  font-size: 12px;
  text-align: center;
}
.homeSp-right-tree{
  height: 71.08px;
  vertical-align: middle;
}
.homeSp-right-tree img{
  height: 100%;
  width: 100%;
}
</style>