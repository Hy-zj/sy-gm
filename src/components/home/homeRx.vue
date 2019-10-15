<template>
  <div class="homeRx">
    <div class="homeRx-top">
      <img src="//gfs13.gomein.net.cn/wireless/T1Z8byByC_1RCvBVdK_1065_129.png" alt />
    </div>
    <div class="homeRx-bottom">
      <div class="homeRx-bottom-one">
        <div class="item1">国美舒适家</div>
        <div class="item2">呼吸优质空气</div>
        <div class="item3">
          <img src="//gfs11.gomein.net.cn/wireless/T14xAXBTdT1RCvBVdK_355_144.jpg" alt />
        </div>
      </div>
      <div class="homeRx-bottom-two">
        <div class="item1">安装清洗</div>
        <div class="item2">国美为您提供上门服务</div>
        <div class="item3">
          <img src="//gfs11.gomein.net.cn/wireless/T1DYVXBQdT1RCvBVdK_355_144.jpg" alt />
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

<style scoped>
.homeRx {
  width: 351px;
  height: 175.66px;
  margin: 0 auto;
  border: 1px solid #f2f2f2;
  background: white;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  margin-top: 15px;
}
.homeRx-top {
  width: 351px;
  height: 42.5px;
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;
}
.homeRx-top img {
  width: 100%;
  height: 100%;
}
.homeRx-bottom {
  width: 351px;
  height: 132.16px;
  display: flex;
}
.homeRx-bottom-one {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f2f2f2;
}
.homeRx-bottom-two {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.item1{
  width: 176px;
  height: 33.95px;
  color: #000;
  font-size: 14px;
  padding: 12px 0 0 12px;
}
.item2{
  width: 176px;
  height: 27.58px;
  font-size: 12px;
  color: #666;
  padding: 2.4px 0 8px 12px;
}
.item3{
  width: 175px;
  height: 70.98px;
  overflow: hidden;
}
.item3 img{
  width: 100%;
  height: 100%;
}
</style>