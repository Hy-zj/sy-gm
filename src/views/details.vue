<template>
  <div class="detail">
    <detailsTop></detailsTop>
    <detailsFooter class="details_foot"></detailsFooter>
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