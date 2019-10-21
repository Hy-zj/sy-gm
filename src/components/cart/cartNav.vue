<template>
  <div>
    <div class="cartNav">
    <div class="cartNav-top">
      <p class="cartNav-top-desc">有新商品加入购物车，点击查看新增商品</p>
     <router-link to="/my"> <span class="cartNav-top-icon">去登录</span></router-link>
    </div>
    <div class="cartNav-bottom">
      <div class="cartNav-bottom-img">
        <img src="//app.gomein.net.cn/plus/images/shop_cart/bj_baobei.png" alt />
      </div>
      <p class="cartNav-bottom-desc">购物车还是空的，快去挑选商品吧</p>
      <router-link to="/home"><div class="cartNav-bottom-icon">先逛逛</div></router-link>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "cartNav"
};
</script>

<style>
.cartNav {
  width: 100%;
  height: 100%;
  margin: 0 12px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  flex-direction: column;
}
.cartNav-top {
  width: 100%;
  line-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cartNav-top-desc {
  width: 266px;
  line-height: 14px;
  font-size: 14px;
  color: #999;
}
.cartNav-top-icon {
  width: 46px;
  line-height: 22px;
  font-size: 12px;
  color: #5a6066;
  border: 1px solid #5a6066;
  border-radius: 8px;
  margin: 5px 5px 5px 25px;
  text-align: center;
}
.cartNav-bottom {
  flex: 1;
  color: #3333;
  padding: 50px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cartNav-bottom-img {
  width: 170px;
  height: 170px;
  margin: 0 auto;
}
.cartNav-bottom-img img {
  width: 100%;
  height: 100%;
}
.cartNav-bottom-desc {
  color: #999;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
}
.cartNav-bottom-icon {
  font-size: 14px;
  line-height: 37px;
  min-width: 90px;
  padding: 0 15px;
  border: 1px solid red;
  background: red;
  color: white;
  text-align: center;
  border-radius: 15px;
}
</style>