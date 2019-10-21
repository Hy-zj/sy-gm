<template>
  <div class="searchList-footer">
    <div v-if="tabList[activeIndex]">
    <div class="searchList-footer-item" v-for="son in activeData.son[2].children" :key="son.name">
      <div class="searchList-footer-item-left">
        <img :src="son.imgurl" alt />
      </div>
      <div class="searchList-footer-item-right">{{son.des}}</div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchListFzTree",
  data() {
    return {
     activeIndex: 0
    }
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
  }
};
</script>

<style>
</style>