<template>
  <div>
    <div class="list_topSearch_header" v-if="msg">
      <router-link to="/home">
        <van-icon name="arrow-left" class="arrow-left"></van-icon>
      </router-link>
      <input
        type="text"
        v-model="$store.state.searchoneList[$store.state.searchoneList.length-1]"
        @click="backHome"
      />
      <van-icon name="search" class="search" />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAANCAYAAAAwqJfrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MkVCRjVFMTYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MkVCRjVFMjYzQ0YxMUU4QkM3MTgyMTA3MDY2OTQxRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRUJGNURGNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkyRUJGNUUwNjNDRjExRThCQzcxODIxMDcwNjY5NDFFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UorgpQAAARdJREFUeNrUllEOgjAMhgvxBJBwAn0jMfHZFzgE3EDjHcBE8Q4cBx58VwNvegW4ArbLWCqZ6AtL+JNmXeEbJesKVtd10CtN0zUOB7Qt2grtiXZFy9EeMK5J2CzLFGv1yWKiZxpGFryMXJ+UxYRTlewfiY491AhLCVtJktAW3Puo7/sQBAG4rgtN00BZllBVFQc3CN5Y2RhjF7JWFBDHsbrqeR5EUSR8BtL9O+YbY21Z1EL0ZjoN4ludb4K15ekToi3QyXEcPl0y3yhryzYhRLWiU9u2fPpivlHWlv1MqCgKLTSIX3W+CXYhm/aeZnVdA7WyMAzVqSSA4kz5wDfGzqrPUhkAOkccTj+AbwtPzn58webyb/AWYAAoKep22aBcgwAAAABJRU5ErkJggg=="
        @click="toggle"
      />
      <DropDownTab v-show="tab"></DropDownTab>
    </div>
    <div class="searchList-nav" v-if="msg">
      <div class="searchList-nav-one">
        <img src="//gfs13.gomein.net.cn/T1xLEbBTZT1RCvBVdK.jpg" alt />
      </div>
      <div class="searchList-nav-two">华为手机旗舰店</div>
      <div class="searchList-nav-tree">国美自营</div>
      <div class="searchList-nav-four">
        <a href="http://mcp.m.gome.com.cn/gome/dy_C64gM1kAFkF/brand.html?shopKey=10000962">
          <img
            src="//app.gomein.net.cn/plus/images/product_list/flagship_right.png?v=2017092001"
            alt
          />
        </a>
      </div>
    </div>
    <div class="searchList-main">
      <div class="searchList-main-nav" v-if="msg">
        <div class="searchList-main-nav-one">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="searchList-main-nav-two">价格</div>
        <div class="searchList-main-nav-tree">销量</div>
        <div class="searchList-main-nav-four">筛选</div>
      </div>
      <div class="searchList-main-header" ref="searchList">
        <div class="searchList-main-header-one" :class="{active1:msglog}" @click="gmtwo">国美自营</div>
        <div
          class="searchList-main-header-two"
          :class="{active2:msglog1}"
          @click="gmtree"
          ref="headertwo"
        >团抢商品</div>
        <div class="searchList-main-header-tree">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
      </div>
    </div>
    <component :item="$store.state.itemList" v-bind:is="currentTabComponent"></component>
  </div>
</template>


<script>
import Vue from "vue";
import { Icon } from "vant";
import DropDownTab from "../components/pulic/DropDownTab";
Vue.use(Icon);
import { DropdownMenu, DropdownItem } from "vant";

Vue.use(DropdownMenu).use(DropdownItem);

import searchListFzOne from "../components/searchListFz/searchListFzOne";
import searchListFzTwo from "../components/searchListFz/searchListFzTwo";
import searchListFzTree from "../components/searchListFz/searchListFzTree";
export default {
  name: "searchList",
  data() {
    return {
      tab: false,
      msg: true,
      msglog: false,
      msglog1: false,
      value1: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      currentTabComponent: "searchListFzOne"
    };
  },
  components: {
    DropDownTab,
    searchListFzOne,
    searchListFzTwo,
    searchListFzTree
  },
  methods: {
    toggle() {
      this.tab = !this.tab;
    },
    backHome() {
      this.$router.push("/search");
    },
    //动态组件跳转
    gmtwo() {
      this.currentTabComponent = "searchListFzTwo";
      this.msglog = !this.msglog;
    },
    //动态组件跳转
    gmtree() {
      this.msglog1 = !this.msglog1;
      this.currentTabComponent = "searchListFzTree";
      console.log(this.$refs.headertwo.removeAttribute("color"));
    },
    scrollToTop() {
      const that = this;
      let scrollTop = window.pageYOffset;
      //  ||
      // document.documentElement.scrollTop ||
      // document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 85) {
        var NUM = document.querySelector(".searchList-main-header");
        if (NUM) {
          document.querySelector(".searchList-main-header").style.position =
            "fixed";
          document.querySelector(".searchList-main-header").style.top = 0;
        }
      }
      if (that.scrollTop == 0) {
        var NUM = document.querySelector(".searchList-main-header");
        if (NUM) {
          document.querySelector(".searchList-main-header").style.position =
            "static";
          document.querySelector(".searchList-main-header").style.top = 0;
        }
      }
    },
    getdataList() {
      this.$store.commit("getdata");
    }
  },
  mounted() {
    document.addEventListener("click", e => {
      if (!this.$el.contains(e.target)) {
        this.tab = false;
      }
    });

    //往下划效果
    window.addEventListener("scroll", this.scrollToTop);
    console.log((this.$refs.searchList.style.position = "fixed"));
    //store.dispatch('increment')
  },
  created() {
    //调用方法获取数据
    this.getdataList();
  }
};
</script>

<style>
.list_topSearch_header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(234, 234, 234);
}
.list_topSearch_header .arrow-left {
  font-size: 22px;
  color: #646464;
}
input {
  width: 268px;
  height: 30px;
  padding-left: 10px;
  background-color: #f8f8f8;
  font-size: 13px;
  outline: none;
  border: none;
  border-radius: 15px;
  position: relative;
}
.search {
  position: absolute;
  right: 60px;
}
img {
  width: 21.5px;
  height: 6.5px;
}
.searchList-nav {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
}
.searchList-nav-one {
  width: 50px;
  height: 15px;
  margin: 0 15px;
}
.searchList-nav-one img {
  width: 100%;
  height: 100%;
}
.searchList-nav-two {
  width: 100px;
  line-height: 15px;
  font-size: 12px;
  color: #646464;
  margin-top: 2.4px;
}
.searchList-nav-tree {
  width: 50px;
  line-height: 15px;
  font-size: 12px;
  color: #ffff;
  margin-top: 2.4px;
  background: red;
}
.searchList-nav-four {
  width: 10px;
  height: 15px;
  font-size: 12px;
  color: #ffff;
  margin-top: 2.4px;
  margin-left: 120px;
}
.searchList-nav-four img {
  width: 100%;
  height: 100%;
}
.searchList-main {
  width: 100%;
  height: 100px;
}
.searchList-main-nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-around;
}
.searchList-main-nav.one {
  width: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}
.searchList-main-header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #646464;
  padding: 0 15px;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  position: static;
}
.searchList-main-header-one {
  flex: 1;
  text-align: center;
  background: #f3f5f7;
  color: #999;
  margin: 0 5px;
}
.active1 {
  flex: 1;
  text-align: center;
  background: #fff;
  color: red;
  margin: 0 5px;
}
.active2 {
  flex: 1;
  text-align: center;
  background: #fff;
  color: blue;
  margin: 0 5px;
}
.searchList-main-header-two {
  flex: 1;
  text-align: center;
  background: #f3f5f7;
  color: #999;
  margin: 0 5px;
}
.searchList-main-header-tree {
  flex: 2;
  text-align: center;
  background: #f3f5f7;
  color: #999;
  margin: 0 5px;
}
.searchList-footer {
  width: 100%;
  height: 1000px;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.searchList-footer-item {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 1px solid #f2f2f2;
}
.searchList-footer-item-left {
  flex: 1;
}
.searchList-footer-item-left img {
  width: 100%;
  height: 100%;
}
.searchList-footer-item-right {
  flex: 3;
  padding: 5px;
}
</style>