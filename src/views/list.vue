<template>
  <div>
    <div class="clo" v-show="show" @click="showAd"></div>
    <topSearch class="fixed"></topSearch>
    <van-row class="list_container" type="flex">
      <van-col class="list_container_tab_title" span="5">
        <van-sidebar v-model="activeIndex">
          <van-sidebar-item v-for="tab in tabList" :key="tab.id" :title="tab.title" />
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
export default {
  name: "list",
  components: {
    topSearch
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
    getData() {
      this.$store.commit("insert");
    },
    showAd() {
      this.show = false;
      document.querySelector(".fixed").style.top = "0px";
      document.querySelector(".list_container").style.marginTop = "44px";
    }
  }
};
</script>

<style scoped>
.clo {
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  z-index: 99;
}
.fixed {
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 99;
  background-color: #fff;
}
.list_container {
  margin-top: 84px;
}
.list_container_tab_title {
  height: 100%;
  overflow-y: auto;
  
}
.list_product_list {
  width: 290px;
  padding-left: 10px;
  /* overflow-y: auto; */
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