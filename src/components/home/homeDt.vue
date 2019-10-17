<template>
  <div>
    <div class="homeDt">
      <div class="homeDt-homeDt-left">
        <div class="homeDt-homeDt-left-title">
          <img src="//gfs13.gomein.net.cn/wireless/T1yEhbB7J_1RCvBVdK_120_28.png" alt />
        </div>
      </div>
      <div class="homeDt-homeDt-right">
        <van-swipe :show-indicators="false" style="height: 36px;" :autoplay="1000" vertical>
          <van-swipe-item>
            <div class="homeDt-right-one">
              <span class="homeDt-icon">国美黄金</span>
              <span class="homeDt-icon1">投资金条 优惠购金</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeDt-right-one">
              <span class="homeDt-icon">金秋收季节</span>
              <span class="homeDt-icon1">套购0元的配件</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeDt-right-one">
              <span class="homeDt-icon">冰箱洗衣机</span>
              <span class="homeDt-icon1">套购7.5折起</span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
import "vant/lib/index.css";
export default {
  name: "homeDt"
};
</script>

<style>
.homeDt {
  width: 100%;
  height: 51.38px;
  background: red;
  padding-top: 15px;
  background: white;
  border-radius: 8px 8px 0 0;
  border: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
}
.homeDt-homeDt-left {
  flex: 1;
  line-height: 36px;
  margin-left: 10px;
  border-right: 1px solid #f2f2f2;
}
.homeDt-homeDt-left-title {
  width: 77px;
  line-height: 18px;
}
.homeDt-homeDt-left-title img {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.homeDt-homeDt-right {
  flex-grow: 5;
  height: 36px;
  margin-bottom: 5px;
}
.homeDt-right-one {
  line-height: 36px;
  margin-bottom: 10px;
  padding-left: 20px;
}
.homeDt-icon {
  width: 61.79px;
  line-height: 20px;
  font-size: 12px;
  color: #f20c56;
  background: #ffbce7;
  margin-right: 5px;
  border: 1px solid #ffbce7;
  border-radius: 5px;
}
.homeDt-icon1 {
  line-height: 18px;
  font-size: 13px;
  color: #666;
}
</style>