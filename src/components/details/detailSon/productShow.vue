<template>
  <div class="product_show">
    <div class="product_item">
      <div class="product_img">
        <img src="//gfs17.gomein.net.cn/T1TFbyBTV_1RCvBVdK_160.jpg?v=20170727" />
      </div>
      <div class="product_des">
        <p>
          华为手机Mate20(HMA-AL0O)
          6GB+ 128GB麒麟980芯片全面屏超微距影像全网通双卡双待翡冷翠
        </p>
        <span>￥3699</span>
      </div>
    </div>
    <div class="product_show_tab">本公司为线下实体渠道,机器库存变动较大,为了避免出现您下单后等待发货时间较长,购天前请咨询具体颜色和内存是否有库存<span>◆</span></div>
    <productTab></productTab>
  </div>
</template>

<script>
import productTab from "../product/productTab";
export default {
  name: "productShow",
  components:{
    productTab
  }
};
</script>

<style>
.product_show {
  width: 100%;
  font-size: 14px;
  color: #333;
}
.product_show .product_item {
  width: 100%;
  padding: 0 12px;
  height: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product_img {
  width: 35%;
}
.product_show .product_item .product_img img {
  width: 100%;
  height: 100%;
}
.product_show .product_item .product_des {
  width: 70%;
  line-height: 160%;
}
.product_show .product_item .product_des span {
  color: #f20c59;
  display: inline-block;
  margin-top: 15px;
}
.product_show .product_show_tab {
  width: 351px;
  height: 81px;
  background-color: #fffde5;
  color: #ff8000;
  font-size: 12px;
  padding: 11px;
  margin: 12px 12px 18px;
  line-height: 20px;
  position: relative;
}
.product_show .product_show_tab span{
    color: #fffde5;
    font-size: 28px;
    position: absolute;
    top: -10px;
}
</style>