<template>
  <div class="gg-header">
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
</template>

<script>
export default {
  name: "Advertisement",
  methods:{
    // showAd() {
    //   this.show = false;
    //   document.querySelector(".fixed").style.top = "0px";
    //   document.querySelector(".list_container").style.marginTop = "44px";
    // }
  }
};
</script>

<style scoped>
.gg-header {
  width: 100%;
  height: 60px;
  background: #333;
  display: flex;
  justify-content: space-around;
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
</style>