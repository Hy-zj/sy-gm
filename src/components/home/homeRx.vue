<template>
  <div>
    <div class="homeRx">
    <div class="homeRx-homeRx-top">
      <img src="//gfs13.gomein.net.cn/wireless/T1Z8byByC_1RCvBVdK_1065_129.png" />
    </div>
    <div class="homeRx-homeRx-bottom">
      <div class="homeRx-homeRx-bottom-one">
        <div class="homeRx-item1">国美舒适家</div>
        <div class="homeRx-item2">呼吸优质空气</div>
        <div class="homeRx-item3">
          <img src="//gfs11.gomein.net.cn/wireless/T14xAXBTdT1RCvBVdK_355_144.jpg" />
        </div>
      </div>
      <div class="homeRx-homeRx-bottom-two">
        <div class="homeRx-item1">安装清洗</div>
        <div class="homeRx-item2">国美为您提供上门服务</div>
        <div class="homeRx-item3">
          <img src="//gfs11.gomein.net.cn/wireless/T1DYVXBQdT1RCvBVdK_355_144.jpg" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "homeRx"
};
</script>

<style>
.homeRx {
  width: 100%;
  height: 100%;
  /* margin: 0 15px; */
  border: 1px solid #f2f2f2;
  background: white;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  margin-top: 15px;
}
.homeRx-homeRx-top {
  flex: 1;
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;
}
.homeRx-homeRx-top img {
  width: 100%;
  height: 100%;
}
.homeRx-homeRx-bottom {
  flex: 1;
  display: flex;
}
.homeRx-homeRx-bottom-one {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f2f2f2;
}
.homeRx-homeRx-bottom-two {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.homeRx-item1{
  width: 176px;
  height: 33.95px;
  color: #000;
  font-size: 14px;
  padding: 12px 0 0 12px;
}
.homeRx-item2{
  width: 176px;
  height: 27.58px;
  font-size: 12px;
  color: #666;
  padding: 2.4px 0 8px 12px;
}
.homeRx-item3{
  flex: 1;
  overflow: hidden;
}
.homeRx-item3 img{
  width: 100%;
  height: 100%;
}
</style>