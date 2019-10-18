<template>
  <div>
    <div class="cartHeader">
      <div class="cartHeader-one" @click="change">
        <van-icon name="arrow-left" />
      </div>
      <div class="cartHeader-two">购物车</div>
      <div class="cartHeader-tree">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAANCAYAAAAwqJfrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkVCRjVFMTYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkVCRjVFMjYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRUJGNURGNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRUJGNUUwNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UorgpQAAARdJREFUeNrUllEOgjAMhgvxBJBwAn0jMfHZFzgE3EDjHcBE8Q4cBx58VwNvegW4ArbLWCqZ6AtL+JNmXeEbJesKVtd10CtN0zUOB7Qt2grtiXZFy9EeMK5J2CzLFGv1yWKiZxpGFryMXJ+UxYRTlewfiY491AhLCVtJktAW3Puo7/sQBAG4rgtN00BZllBVFQc3CN5Y2RhjF7JWFBDHsbrqeR5EUSR8BtL9O+YbY21Z1EL0ZjoN4ludb4K15ekToi3QyXEcPl0y3yhryzYhRLWiU9u2fPpivlHWlv1MqCgKLTSIX3W+CXYhm/aeZnVdA7WyMAzVqSSA4kz5wDfGzqrPUhkAOkccTj+AbwtPzn58webyb/AWYAAoKep22aBcgwAAAABJRU5ErkJggg=="
          @click="toggle"
        />
        <DropDownTab v-show="tab"></DropDownTab>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
import DropDownTab from "../pulic/DropDownTab";
export default {
  name: "cartHeader",
 data() {
   return {
     tab: false
   }
 },
  mounted() {
    document.addEventListener('click',e=>{
      if (!this.$el.contains(e.target)) {
        this.tab = false;
      }
    })
  },
  components: {
    DropDownTab
  },
  methods: {
    change() {
      this.$router.back();
    },
    toggle() {
      this.tab = !this.tab;
    }
  }
};
</script>

<style>
.cartHeader {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
}
.cartHeader-one {
  width: 35.5px;
  line-height: 44px;
  text-align: center;
}
.cartHeader-two {
  width: 54px;
  line-height: 44px;
  font-size: 18px;
  color: #333;
  margin: 0 auto;
  text-align: center;
}
.cartHeader-tree {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>