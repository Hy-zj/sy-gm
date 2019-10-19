<template>
  <div class="after_sale">
    <div class="packaging">包装清单</div>
    <div class="description">燃气灶x1，说明书x1，合格证x1</div>
    <div class="packaging">售后服务</div>
    <div
      class="description"
    >1)手机x12)电池(内置)x13)快速指南x14)华为SuperCharge充电器x1 5)三包凭证x16)半入耳式线控耳机x1 7 ) Type-C数据线x18)取卡针x1 9) TPU保护壳x .1以官网为准</div>
    <div class="packaging">价格说明</div>
    <div class="description">
     <p>1.未划线价格:该价格是商品的销售标价,最终成交价格可能会因使用优惠券等原因而发生变化,请以订单结算页面价格为准。</p> 
     <p> 2.划线价格:该价格是商品的参考价,可能是商品的厂商指导价、正品零售价、商品吊牌价、品牌专柜价,或者是在国美平台上曾经展示过的销售价等价格,仅供您选购商品时参考。</p>
      3.其他:商品促销信息以商品详情页促销栏目中的信息为准; 如您发现活动商品售价或促销信息有异常,请购买前先联天承售商咨询。
    </div>
  </div>
</template>

<script>
export default {
  name: "afterSale"
};
</script>

<style>
.after_sale {
  font-size: 14px;
  color: #00050a;
}
.after_sale .packaging {
  margin-top: 12px;
  padding-left: 8px;
  border-left: 3px solid #f20c59;
}
.after_sale .description {
  font-size: 13px;
  color: #5a6066;
  padding: 20px 0 6px 0px;
  margin-left: 12px;
  border-bottom: 1px solid #dcddde;
  line-height: 170%;
}
</style>