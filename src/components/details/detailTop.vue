<template>
  <div>
    <div class="detailTop_top">
      <div class="top_left">
        <van-icon name="arrow-left" class="my-arrow-left" size="24px" @click="backLastOne"/>
      </div>
      <div class="top_middle">
        <div class="product" @click="showdet(0)" :class="{detActive:detIndex==0}">商品</div>
        <div class="xiangqing" @click="showdet(1)" :class="{detActive:detIndex==1}">详情</div>
        <div class="pingjia" @click="showdet(2)" :class="{detActive:detIndex==2}">评价</div>
      </div>
      <div class="top_right">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAANCAYAAAAwqJfrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkVCRjVFMTYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkVCRjVFMjYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRUJGNURGNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRUJGNUUwNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UorgpQAAARdJREFUeNrUllEOgjAMhgvxBJBwAn0jMfHZFzgE3EDjHcBE8Q4cBx58VwNvegW4ArbLWCqZ6AtL+JNmXeEbJesKVtd10CtN0zUOB7Qt2grtiXZFy9EeMK5J2CzLFGv1yWKiZxpGFryMXJ+UxYRTlewfiY491AhLCVtJktAW3Puo7/sQBAG4rgtN00BZllBVFQc3CN5Y2RhjF7JWFBDHsbrqeR5EUSR8BtL9O+YbY21Z1EL0ZjoN4ludb4K15ekToi3QyXEcPl0y3yhryzYhRLWiU9u2fPpivlHWlv1MqCgKLTSIX3W+CXYhm/aeZnVdA7WyMAzVqSSA4kz5wDfGzqrPUhkAOkccTj+AbwtPzn58webyb/AWYAAoKep22aBcgwAAAABJRU5ErkJggg=="
          @click="toggle"
        />
        <DropDownTab v-show="tab"></DropDownTab>
      </div>
    </div>
    <div v-if="detIndex==0" class="to_top">
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
        <van-swipe-item>
          <mayLike></mayLike>
        </van-swipe-item>
        <van-swipe-item>
          <mayLike></mayLike>
        </van-swipe-item>
        <van-swipe-item>
          <mayLike></mayLike>
        </van-swipe-item>
        <van-swipe-item>
          <mayLike></mayLike>
        </van-swipe-item>
        <van-swipe-item>
          <mayLike></mayLike>
        </van-swipe-item>
      </van-swipe>
      <division></division>
      <productTab></productTab>
    </div>

    <div v-if="detIndex==1">
      <productShow class="to_top"></productShow>
    </div>
    <div v-if="detIndex==2">
      <evaluate class="to_top"></evaluate>
    </div>
  </div>
</template>

<script>
import DropDownTab from "../pulic/DropDownTab";
import productSwiper from "./product/productSwiper";
import countDown from "./product/countDown";
import share from "./product/share";
import Recommendation from "./product/Recommendation";
import division from "../pulic/division";
import toAddress from "./product/toAddress";
import shopAddress from "./product/shopAddress";
import customerService from "./product/customerService";
import newForOld from "./product/newForOld";
import oneCustomer from "./product/oneCustomer";
import showImg from "./product/showImg";
import shopLogo from "./product/shopLogo";
import mayLike from "./product/mayLike";
import productTab from "./product/productTab";

import productShow from "./detailSon/productShow";

import evaluate from "./evaluate/index";
export default {
  name: "detailsTop",
  data() {
    return {
      tab: false,
      detIndex: 0
    };
  },
  components: {
    DropDownTab,
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
    productShow,
    evaluate
  },
  methods: {
    toggle() {
      this.tab = !this.tab;
    },
    showdet(index) {
      this.detIndex = index;
    },
    backLastOne(){
      window.history.back()
    }
  },
  mounted() {
    document.addEventListener("click", e => {
      if (!this.$el.contains(e.target)) {
        this.tab = false;
      }
    });
  }
};
</script>

<style>
.detActive{
  font-size: 17px;
  color: #f20c59;
  padding: 15px 0;
  border-bottom: 2px solid #f20c59;
}
.to_top{
  margin-top: 54px;
}
.detailTop_top {
  width: 100%;
  height: 54px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.detailTop_top .top_left {
  width: 15%;
}
.detailTop_top .top_left .my-arrow-left {
  vertical-align: middle;
}
.detailTop_top .top_middle {
  width: 70%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.detailTop_top .top_middle .product {
  width: 30%;
}
.detailTop_top .top_middle .xiangqing {
  width: 30%;
}
.detailTop_top .top_middle .pingjia {
  width: 30%;
}
.detailTop_top .top_right {
  width: 15%;
}
.detailTop_top .top_right img {
  vertical-align: middle;
}
</style>