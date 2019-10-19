<template>
  <div>
    <detailsTop class="details_top"></detailsTop>
    <div class="middle">
      <productSwiper class="detail_product_swiper"></productSwiper>
      <countDown></countDown>
      <share></share>
      <division></division>
      <Recommendation></Recommendation>
      <division></division>
      <toAddress></toAddress>
      <division></division>
      <shopAddress></shopAddress>
      <customerService></customerService>
      <division></division>
      <newForOld></newForOld>
      <division></division>
      <oneCustomer></oneCustomer>
      <showImg></showImg>
      <division></division>
      <shopLogo></shopLogo>
      <division></division>
      
      <van-swipe indicator-color="#f20c59">
        <van-swipe-item><mayLike></mayLike></van-swipe-item>
        <van-swipe-item><mayLike></mayLike></van-swipe-item>
        <van-swipe-item><mayLike></mayLike></van-swipe-item>
        <van-swipe-item><mayLike></mayLike></van-swipe-item>
        <van-swipe-item><mayLike></mayLike></van-swipe-item>
      </van-swipe>
      <division></division>
      <productTab></productTab>
    </div>

    <detailsFooter class="details_foot"></detailsFooter>
  </div>
</template>

<script>
import detailsTop from "../components/details/detailTop";
import detailsFooter from "../components/details/detailsFooter";
import countDown from "../components/details/product/countDown";
import productSwiper from "../components/details/product/productSwiper";
import share from "../components/details/product/share";
import Recommendation from "../components/details/product/Recommendation";
import division from "../components/pulic/division";
import toAddress from "../components/details/product/toAddress";
import shopAddress from "../components/details/product/shopAddress";
import customerService from "../components/details/product/customerService";
import newForOld from "../components/details/product/newForOld";
import oneCustomer from "../components/details/product/oneCustomer";
import showImg from "../components/details/product/showImg";
import shopLogo from "../components/details/product/shopLogo";
import mayLike from "../components/details/product/mayLike";
import productTab from '../components/details/product/productTab'

import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  name: "detail",
  components: {
    detailsTop,
    detailsFooter,
    countDown,
    productSwiper,
    share,
    Recommendation,
    division,
    toAddress,
    shopAddress,
    customerService,
    newForOld,
    oneCustomer,
    showImg,
    shopLogo,
    mayLike,
    productTab,
   
  }
};
</script>

<style scoped>
.details_top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.middle {
  width: 100%;
  margin-top: 54px;
  overflow-y: auto;
  height: 4000px;
}
.detail_product_swiper {
  margin-top: 54px;
}
.details_foot {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>