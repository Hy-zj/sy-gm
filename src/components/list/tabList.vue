<template>
  <div>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content"></template>
    </van-tree-select>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
export default {
  name: "tabList",
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      items: [{ text: "热门分类",children:'' },
    
      ]
    };
  }
};
</script>

<style>
</style>