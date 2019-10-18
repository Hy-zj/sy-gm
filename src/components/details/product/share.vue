<template>
  <div class="product_share">
    <div class="product_share_top">
      <div class="product_share_left">
        <div class="slfe_icon">自营</div>
        <p>Apple Macbook Air 13.3 Core i5 8G 128G SSD 苹果笔记本电脑 轻薄本 银色 MQD32CH/A</p>
      </div>
      <div class="product_share_right">
        <img
          src="https://css.gomein.net.cn/plus/style/product/item/images/ic_share.6dfd1e0792.png"
          alt
        />
        <p>分享</p>
      </div>
    </div>
    <p>纤巧轻薄 超长续航 温馨提示：为购买方便，下单前情仔细阅读商品详情中的《购买须知》</p>
  </div>
</template>

<script>
export default {
  name: "share"
};
</script>

<style>
.product_share {
  width: 100%;
  height: 127px;
  padding: 10px;
  color: #333;
}
.product_share .product_share_top {
  height: 48px;
  display: flex;
  justify-content: center;
}
.product_share .product_share_top .product_share_left {
  width: 85%;
  height: 100%;
  padding-right: 15px;
}
.slfe_icon {
  width: 28px;
  height: 18px;
  background-color: #f20c59;
  font-size: 12px;
  color: #fff;
  float: left;
  padding: 2px;
}
.product_share .product_share_top .product_share_left p {
  font-size: 16px;
  color: #333;
  text-indent: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.product_share .product_share_top .product_share_right {
  width: 15%;
  height: 100%;
  text-align: center;
  border-left: 1px solid #e6e6e6;
  padding-left: 10px;
}
.product_share .product_share_top .product_share_right p {
  font-size: 16px;
  color: #333;
}
.product_share .product_share_top .product_share_right img {
  width: 22px;
  height: 22px;
}
.product_share p {
  font-size: 12px;
  color: #f20c59;
}
</style>