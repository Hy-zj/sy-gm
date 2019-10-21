<template>
  <div class="specifications">
    <div class="packaging">基本信息</div>
    <div class="spec_list">
      <div class="left">机身尺寸</div>
      <div class="right">以官网为主</div>
    </div>
    <div class="packaging">操作系统</div>
    <div class="spec_list">
      <div class="left">操作系统</div>
      <div class="right">安卓（Andriod）</div>
    </div>
    <div class="packaging">主芯片</div>
    <div class="spec_list">
      <div class="left">CPU品牌</div>
      <div class="right">海思</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Specifications"
};
</script>

<style>
.specifications .packaging {
  margin-top: 12px;
  padding-left: 8px;
  border-left: 3px solid #f20c59;
  font-size: 14px;
  color: #919599;
}
.specifications .spec_list {
  font-size: 13px;
  color: #919599;
  padding: 20px 0 6px 0px;
  margin-left: 18px;
  border-bottom: 1px solid #dcddde;
  line-height: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.specifications .spec_list .left{
    width: 30%;
}
.specifications .spec_list .right{
    width: 70%;
    color: #00050a;
}
</style>