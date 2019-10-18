<template>
  <div class="product_swiper">
    <van-swipe @change="onChange">
      <van-swipe-item><img src="https://gfs17.gomein.net.cn/T1NOWjBvYv1RCvBVdK_400.jpg?v=20170727" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://gfs13.gomein.net.cn/T1GrJbBjbT1RCvBVdK_400.jpg?v=20170727" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://gfs11.gomein.net.cn/T1hQEbB_Lv1RCvBVdK_400.jpg?v=20170727" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://gfs12.gomein.net.cn/T1CG_jBjWT1RCvBVdK_400.jpg?v=20170727" alt=""></van-swipe-item>
      <van-swipe-item><img src="https://gfs12.gomein.net.cn/T1CG_jBjWT1RCvBVdK_400.jpg?v=20170727" alt=""></van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/5</div>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
    name:"productSwiper",
    data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style>
.product_swiper{
  text-align: center;
}

.product_swiper img{
  width:300px;
  height: 300px; 
}
.custom-indicator{
  width: 53px;
  height: 24px;
  background-color: rgba(51,51,51,.5);
  color: #fff;
  border-radius: 10px;
  position: absolute;
  margin-left: 80%;
  margin-top: 73%;

}
</style>