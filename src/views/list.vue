<template>
  <div style="height:100%">
    <div class="gg-header" v-show="show">
      <div class="ad_one">
        <img src="https://css.gomein.net.cn/plus/style/appDown/images/close.png" @click="showAd" />
      </div>
      <div class="ad_two">
        <img src="https://gfs9.gomein.net.cn/T1VnKvB7_T1RCvBVdK.png" alt />
      </div>
      <div class="ad_three">
        <p>注册享好礼</p>
        <span>送205元红包</span>
      </div>
      <div class="ad_four">下载领取</div>
    </div>

    <topSearch class="fixed"></topSearch>
    <van-row class="list_container" type="flex">
      <van-col id="sidebarParent" class="list_container_tab_title" span="5">
        <van-sidebar v-model="activeIndex">
          <van-sidebar-item
            @click="getY(tab.id)"
            :id="tab.id"
            v-for="tab in tabList"
            :key="tab.id"
            :title="tab.title"
          />
        </van-sidebar>
      </van-col>
      <van-col class="list_product_list" span="18">
        <!-- 当异步加载完成后再显示数据，避免报undefined -->
        <div v-if="tabList[activeIndex]">
          <div v-if="activeData.top_img">
            <img :src="activeData.top_img" />
          </div>
          <div v-for="son in activeData.son" :key="son.name">
            <span class="list_name">{{son.name}}</span>
            <!-- 产品部分 -->
            <van-row gutter="10">
              <van-col
                span="8"
                v-for="child in son.children"
                :key="son.name+`_${child.des}`"
                class="list_product_container"
              >
                <div class="list_product">
                  <img :src="child.imgurl" />
                  <div class="list_wirte">{{child.des}}</div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem, Row, Col } from "vant";
Vue.use(Sidebar)
  .use(SidebarItem)
  .use(Col)
  .use(Row);
import topSearch from "../components/list/topSearch";
import Advertisement from "../components/home/Advertisement";
export default {
  name: "list",
  components: {
    topSearch,
    Advertisement
  },
  data() {
    return {
      activeIndex: 0,
      show: true
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    tabList() {
      return this.$store.getters.tabList;
    },
    activeData() {
      return this.tabList[this.activeIndex];
    }
  },
  methods: {
    getY(id) {
      var p = document.getElementById("sidebarParent");
      var doc = document.getElementById(id);

      p.scrollTop = doc.offsetTop;
    },
    getData() {
      this.$store.commit("insert");
    },
    showAd() {
      this.show = false;
      document.querySelector(".fixed").style.top = "0px";
      document.querySelector(".list_container").style.top = "44px";
    }
  }
};
</script>

<style scoped>
.gg-header {
  width: 100%;
  height: 60px;
  background: #333;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.ad_one {
  width: 15%;
  padding: 22.5px 20px;
}
.ad_one img {
  width: 15px;
  height: 15px;
}
.ad_two {
  width: 15%;
  padding: 9px 0;
}
.ad_two img {
  width: 42px;
  height: 42px;
}
.ad_three {
  width: 45%;
  padding: 12px 0;
}
.ad_three p {
  color: #fff;
  font-size: 13px;
}
.ad_three span {
  color: #999;
  font-size: 12px;
}
.ad_four {
  background-color: #ee1955;
  color: #fff;
  padding: 21px 0;
  width: 25%;
  font-size: 15px;
  text-align: center;
}
/* .clo {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
} */
.fixed {
  width: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 99;
  background-color: #fff;
}
.list_container {
  position: absolute;
  top: 104px;
  bottom: 0;
}
.list_container_tab_title {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.list_product_list {
  width: 290px;
  height: 100%;
  padding-left: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
.list_product_list img {
  width: 280px;
  height: 100%;
}
.list_product_container {
  margin-top: 10px;
}

.list_product {
  width: 87px;
  height: 107px;
  background-color: #f8f8f8;
  text-align: center;
}
.list_product img {
  width: 78px;
  height: 78px;
}

.list_name {
  color: #999;
  font-size: 12px;
}
.list_wirte {
  color: #666;
  font-size: 13px;
}
</style>