<template>
  <div class="searchListone-footer">
    <div class="searchListone-footer-item" v-for="item1 in filterData" :key="item1.id">
      <router-link
        :to="{ name: 'detail', params: { userId: item1.id,name: item1.title, price: item1.price, desc: item1.desc, count: item1.count,imgurl:item1.imgurl}}"
      >
        <div class="searchListone-footer-item">
          <div class="searchListone-footer-item-left">
            <img :src="item1.imgurl" alt />
          </div>
          <div class="searchListone-footer-item-right">
            <p class="searchListone-title">{{item1.desc}}</p>
            <p class="searchListone-desc">￥{{item1.price}}.00</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchListFzOne",
  data() {
    return {};
  },
  props: ["item"],
  mounted() {
    // this.getData();
    // console.log(this.$store.state.searchoneList);
    // console.log(this.item);
  },
  computed: {
    filterData() {
      return this.item.filter(item => {
        return (
          this.searchText === null ||
          item.title.toLowerCase().indexOf(this.searchText.toLowerCase()) >
            -1 ||
          item.desc.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
        );
      });
    },
    searchText() {
      console.log(typeof this.$store.state.searchoneList);
      return typeof this.$store.state.searchoneList === "object" &&
        this.$store.state.searchoneList.length > 0
        ? this.$store.state.searchoneList[
            this.$store.state.searchoneList.length - 1
          ]
        : null;
    }
  },
  methods: {
    // getData() {
    //   this.$store.commit("insert");
    // }
  }
};
</script>

<style>
.searchListone-footer {
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.searchListone-footer-item {
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
}
.searchListone-footer-item-left {
  width: 120px;
  height: 100%;
}
.searchListone-footer-item-left img {
  width: 100%;
  height: 100%;
}
.searchListone-footer-item-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.searchListone-title {
  width: 100%;
  height: 60px;
  flex-wrap: wrap;
  color: #666;
  margin-top: 20px;
}
.searchListone-desc {
  width: 100%;
  height: 60px;
  color: red;
  margin-top: 20px;
}
</style>