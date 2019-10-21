<template>
  <div>
    <div class="homeJx">
    <div class="homeJx-homeJx-top">
      <img src="//gfs13.gomein.net.cn/wireless/T1bHAyB5Zv1RCvBVdK_1065_129.png" alt />
    </div>
    <div class="homeJx-homeJx-bottom">
      <div class="homeJx-homeJx-bottom-one">
        <div class="homeJx-item1">家居家装</div>
        <div class="homeJx-item2">好物低至5折</div>
        <div class="homeJx-item3">
          <img src="//gfs7.gomein.net.cn/wireless/T1sE_yBQhT1RCvBVdK_355_144.jpg" alt />
        </div>
      </div>
      <div class="homeJx-homeJx-bottom-two">
        <div class="homeJx-item1">智耀我家</div>
        <div class="homeJx-item2">70英寸智慧电视4999元</div>
        <div class="homeJx-item3">
          <img src="//gfs9.gomein.net.cn/wireless/T1wEDyBKxv1RCvBVdK_355_144.jpg" alt />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "homeJx"
};
</script>

<style>
.homeJx {
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
.homeJx-homeJx-top {
 flex: 1;
  border-bottom: 1px solid #f2f2f2;
  overflow: hidden;
}
.homeJx-homeJx-top img {
  width: 100%;
  height: 100%;
}
.homeJx-homeJx-bottom {
 flex: 1;
  display: flex;
}
.homeJx-homeJx-bottom-one {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f2f2f2;
}
.homeJx-homeJx-bottom-two {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.homeJx-item1 {
  width: 175px;
  height: 33.95px;
  color: #000;
  font-size: 14px;
  padding: 12px 0 0 12px;
}
.homeJx-item2 {
  width: 175px;
  height: 27.58px;
  font-size: 12px;
  color: #666;
  padding: 2.4px 0 8px 12px;
}
.homeJx-item3 {
  flex: 1;
  overflow: hidden;
}
.homeJx-item3 img {
  width: 100%;
  height: 100%;
}
</style>