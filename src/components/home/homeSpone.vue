<template>
  <div class="homeSpone">
    <div class="homeSpone-homeSpone-left">
      <img src="//gfs10.gomein.net.cn/wireless/T1VVVyB5Lv1RCvBVdK_354_242.jpg"/>
    </div>
    <div class="homeSpone-homeSpone-right">
      <div class="homeSpone-right-one">
        <span>有好货</span>
        <span class="homeSpone-today">今日好货</span>
      </div>
      <div class="homeSpone-right-two">
        <div class="homeSpone-right-two-one">
          <img src="//gfs17.gomein.net.cn/T1crDXBCdT1RCvBVdK" />
        </div>
        <div class="homeSpone-right-two-two">
          <img src="//gfs17.gomein.net.cn/T1N8_XB_DT1RCvBVdK" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeSpone"
};
</script>

<style>
.homeSpone {
  width: 351px;
  height: 120.28px;
  margin: 0 auto;
  border: 1px solid #f2f2f2;
  background: white;
  display: flex;
}
.homeSpone-homeSpone-left{
  flex: 1;
  border-right: 1px solid #f2f2f2;
}
.homeSpone-homeSpone-left img{
  width: 100%;
  height: 1005;
}
.homeSpone-homeSpone-right{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.homeSpone-right-one{
  height: 21.27px;
  color: #333;
  font-size: 16px;
  margin-top: 15px;
  padding-left: 15px;
}
.homeSpone-right-two{
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
}
.homeSpone-right-two-one{
  width: 63.17px;
  height: 63.17px;
}
.homeSpone-right-two-one img{
  width: 100%;
  height: 100%;
}
.homeSpone-right-two-two{
  width: 63.17px;
  height: 63.17px;
}
.homeSpone-right-two-two img{
  width: 100%;
  height: 100%;
}
.homeSpone-today{
  width: 74px;
  line-height: 18px;
  color: #fff;
  background: #4abbff;
  border: 1px solid #4abbff;
  border-radius: 8px;
  font-size: 12px;
  margin-left: 10px;
}
</style>