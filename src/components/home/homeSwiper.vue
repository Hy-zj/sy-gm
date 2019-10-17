<template>
  <div>
    <div class="homeSwiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs7.gomein.net.cn/wireless/T19ZZyB_Cv1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs8.gomein.net.cn/wireless/T1LoxyB4ZT1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs5.gomein.net.cn/wireless/T1PEKyBjDv1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs11.gomein.net.cn/wireless/T1WCVyBgLT1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs13.gomein.net.cn/wireless/T17ZbyBsAT1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs7.gomein.net.cn/wireless/T19ZZyB_Cv1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs13.gomein.net.cn/wireless/T17ZbyBsAT1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="homeSwiper-home-img">
          <img src="//gfs7.gomein.net.cn/wireless/T19ZZyB_Cv1RCvBVdK_1080_504.jpg" alt />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
import "vant/lib/index.css";
export default {
  name: "homeSwiper"
};
</script>

<style>
.homeSwiper {
  width: 100%;
  height: 175px;
  background: #ccc;
}
.homeSwiper-home-img{
  width: 100%;
  height: 175px;
}
.homeSwiper-home-img img{
  width: 100%;
  height: 100%;
}
</style>