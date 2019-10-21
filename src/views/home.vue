<template>
  <div class="home">
    <div class="gg-header" v-show="show">
      <div class="ad_one">
        <img src="https://css.gomein.net.cn/plus/style/appDown/images/close.png" @click="showAd" />
      </div>
      <div class="ad_two">
        <img src="https://gfs9.gomein.net.cn/T1VnKvB7_T1RCvBVdK.png" alt />
      </div>
      <div class="ad_three">
        <p>注册享好礼</p>
        <span>送205元红包</span>
      </div>
      <div class="ad_four">下载领取</div>
    </div>
    <Navigation class="home_fixed"></Navigation>
    <homeSwiper class="home_swi"></homeSwiper>
    <homeList class="main"></homeList>
    <homeGg></homeGg>
    <homeDt class="main"></homeDt>
    <homeSp class="main"></homeSp>
    <homeSpone class="main"></homeSpone>
    <homeBangdan class="main"></homeBangdan>
    <homeJx></homeJx>
    <homeRx></homeRx>
    <router-link to="/detail">
      <homePb class="main"></homePb>
    </router-link>
    <float></float>
    <backTop></backTop>
    <routerFooter></routerFooter>
  </div>
</template>

<script>
import Advertisement from "../components/home/Advertisement";
import Navigation from "../components/home/Navigation";
import routerFooter from "../components/home/routerFooter";
import homeSwiper from "../components/home/homeSwiper";
import homeList from "../components/home/homeList";
import homeGg from "../components/home/homeGg";
import homeDt from "../components/home/homeDt";
import homeSp from "../components/home/homeSp";
import homeSpone from "../components/home/homeSpone";
import homeBangdan from "../components/home/homeBangdan";
import homeJx from "../components/home/homeJx";
import homeRx from "../components/home/homeRx";
import homePb from "../components/home/homePb";
import float from "../components/home/float";
import backTop from "../components/home/backTop";
export default {
  name: "home",
  data() {
    return {
      show: true
    };
  },
  components: {
    Advertisement,
    routerFooter,
    Navigation,
    homeSwiper,
    homeList,
    homeGg,
    homeDt,
    homeSp,
    homeSpone,
    homeBangdan,
    homeJx,
    homeRx,
    homePb,
    float,
    backTop
  },
  methods: {
    showAd() {
      this.show = false;
      document.querySelector(".home_fixed").style.top = "0px";
      document.querySelector(".home_swi").style.marginTop = "44px";
    }
  }
};
</script>

<style>
.gg-header {
  width: 100%;
  height: 60px;
  background: #333;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.ad_one {
  width: 15%;
  padding: 22.5px 20px;
}
.ad_one img {
  width: 15px;
  height: 15px;
}
.ad_two {
  width: 15%;
  padding: 9px 0;
}
.ad_two img {
  width: 42px;
  height: 42px;
}
.ad_three {
  width: 45%;
  padding: 12px 0;
}
.ad_three p {
  color: #fff;
  font-size: 13px;
}
.ad_three span {
  color: #999;
  font-size: 12px;
}
.ad_four {
  background-color: #ee1955;
  color: #fff;
  padding: 21px 0;
  width: 25%;
  font-size: 15px;
  text-align: center;
}
.home_fixed {
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 99;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.home_swi {
  margin-top: 60px;
}
.home {
  width: 100vw;
  height: 100vh;
}
.main {
  margin: 0 15px;
}
</style>