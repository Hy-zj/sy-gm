<template>
  <div>
    <topSearch></topSearch>
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />-->
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import Vue from "vue";

import { TreeSelect } from "vant";
Vue.use(TreeSelect);
import topSearch from "../components/list/topSearch";
export default {
  name: "list",
  components: {
    topSearch
  },
  data() {
    return {
      activeIndex: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }]
    };
  },
  created () {
    this.getData()
  },
  methods: {
    getData() {
      this.$store.commit('insert')
    }
  }
};
</script>

<style scoped>
</style>