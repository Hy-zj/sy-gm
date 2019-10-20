<template>
  <div class="detail">
    <detailsTop></detailsTop>

    <detailsFooter :goodId="id" class="details_foot"></detailsFooter>
  </div>
</template>

<script>
import detailsTop from "../components/details/detailTop";

import detailsFooter from "../components/details/detailsFooter";
export default {
  name: "detail",
  components: {
    detailsTop,
    detailsFooter
  },
  mounted() {
    let id = this.$route.params.id;
    if (!id) {
      this.$router.back(-1);
    }
    this.id = id;
    this.getDetail(id);
  },
  data() {
    return {
      id: 1002 //实例值
    };
  },
  methods: {
    getDetail(id) {
      let _this = this
      console.log(id);
      this.$axios
        .get(`/data/details/${id}.json`)
        .then(res => {
          console.log(res.data.data);
          //code here
        })
        .catch(e => {
          console.log(e);
          alert("不存在")
          _this.$router.back(-1)
          //code here
        });
    }
  }
};
</script>

<style scoped>
.detail {
  height: 100%;
  padding-bottom: 60px;
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