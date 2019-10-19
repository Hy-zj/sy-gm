<template>
  <div>
    <div class="product_tab_title">
      <div class="left" @click="changeShowTab(0)" :class="{tab_active:pageIndex==0}">商品介绍</div>
      <div class="middle" @click="changeShowTab(1)" :class="{tab_active:pageIndex==1}">规格参数</div>
      <div class="right" @click="changeShowTab(2)" :class="{tab_active:pageIndex==2}">包装售后</div>
    </div>
    <productPreduce v-if="pageIndex==0"></productPreduce>
    <afterSale v-if="pageIndex==1"></afterSale>
    <Specifications v-if="pageIndex==2"></Specifications>
  </div>
</template>

<script>
import productPreduce from "./productPreduce";
import afterSale from './afterSale'
import Specifications from './Specifications'
export default {
  name: "productTab",
  components: {
    productPreduce,
    afterSale,
     Specifications
  },
  data () {
    return {
      tabShow:true,
      pageIndex:0,
    }
  },
  methods: {
    changeShowTab(index){
        this.pageIndex=index;
    }
  }
};
</script>

<style>
.tab_active{
  color: #00050a;
}
.product_tab_title {
  height: 46px;
  width: 100%;
  border-top: 1px solid #d0d3d3;
  border-bottom: 1px solid #d0d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  color: #919599;
}
.product_tab_title .left {
  width: 33.3%;
}
.product_tab_title .middle {
  width: 33.3%;
  padding: 5px 0;
  border-left: 1px solid #d0d3d3;
  border-right: 1px solid #d0d3d3;
}
.product_tab_title .right {
  width: 33.3%;
}
.changeColor{
    color: #00050a;
}
</style>