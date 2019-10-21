<template>
  <div class="new_old">
    <div class="left">
      <p>
        <img
          src="https://css.gomein.net.cn/plus/style/product/item/images/icon_huan_xiangqing.89554e68a8.png"
        />
        以旧换新
      </p>
      <span>大家电以旧换新</span>
    </div>
    <div class="right">
      <p>
        <img
          src="https://css.gomein.net.cn/plus/style/product/item/images/add_service@2x.b35d5167f5.png"
        />
        可选增值服务
      </p>
      <span>为商品保价护航</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'newForOld',
};
</script>

<style>
.new_old {
  width: 100%;
  height: 67px;
  color: #333;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.new_old .left {
  width: 50%;
  line-height: 160%;
  border-right: 1px solid #e6e6e6;
}
.new_old .left img{
    width: 19.19px;
    height: 19.19px;
}
.new_old .right {
  width: 50%;
  line-height: 160%;
}
.new_old .right img{
    width: 16.8px;
    height: 18.19px;
}
.new_old span{
    font-size: 12px;
    color: #a2a4a6;
}
</style>