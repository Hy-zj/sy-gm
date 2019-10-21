<template>
  <div class="product_count_down">
    <div class="product_count_down_left">
      ￥
      <span>{{$route.params.price}}</span>
    </div>
    <div class="product_count_down_middle">
      <p>
        ￥
        <del>6749.0</del>
      </p>
      <p>
        <span class="product_time_tg">团购中</span>
        <span>109人已参团</span>
      </p>
    </div>
    <div class="product_count_down_right">
      <p>距结束时间</p>
      <van-count-down :time="time" color="#fff">
        <template v-slot="timeData" class="time">
          <span class="item">{{ timeData.days }}</span>
          <span style="color:#fff;font-size:12px;">天</span>
          <span class="item">{{ timeData.hours }}</span>
          <span style="color:#fff;font-size:12px;">:</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span style="color:#fff;font-size:12px;">:</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { CountDown } from "vant";

Vue.use(CountDown);
export default {
  name: "countDown",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      timeData: "DD 天 HH : mm : ss "
    };
  }
};
</script>

<style>
.product_count_down {
  width: 100%;
  height: 53px;
  background: url("https://css.gomein.net.cn/plus/style/product/item/images/tq-bg.png?v=2017111401");
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 5px;
}
.product_count_down .product_count_down_left {
  width: 26%;
}
.product_count_down .product_count_down_left span {
  font-size: 30px;
  font-weight: bold;
}
.product_count_down .product_count_down_middle {
  width: 37%;
  font-size: 12px;
  padding-left: 15px;
  padding-bottom: 2px;
}
.product_count_down .product_count_down_middle .product_time_tg {
  color: #ec3467;
  display: inline-block;
  width: 42px;
  height: 21px;
  background-color: #fff;
  border-radius: 18px;
  text-align: center;
  line-height: 21px;
  margin-top: 2px;
  margin-right: 5px;
}
.product_count_down .product_count_down_right {
  width: 37%;
  font-size: 12px;
  text-align: center;
}
.product_count_down .product_count_down_right .time {
  font-size: 12px;
  color: #fff;
}
.item {
  display: inline-block;
  width: 20px;
  margin:0 2px;
  color: #ec3467;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
}
</style>