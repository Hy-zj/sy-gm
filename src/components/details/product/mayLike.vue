<template>
  <div class="myay_you_like">
    <div class="top">猜你喜欢</div>
    <div class="like_list">
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1waKgB4CT1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1ZyAyB4K_1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1u6bQBm_T1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1EBATB_bT1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1gNDgB4x_1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
      <div class="like_item">
        <img src="https://gfs17.gomein.net.cn/T1waKgB4CT1RCvBVdK_160.jpg?v=2" alt />
        <p class="price">￥2599.00</p>
        <p class="des">美的（Midea）大1匹 壁挂式 变频家用 冷暖 空调（冷静星II）KFR-26G</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mayLike"
};
</script>

<style>
.myay_you_like {
  width: 100%;
  height: 442px;
  padding: 0 10px;
}
.myay_you_like .top {
  height: 42px;
  font-size: 15px;
  color: #333;
  line-height: 42px;
}
.myay_you_like .like_list {
  height: 380px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.myay_you_like .like_list .like_item {
  width: 32%;
  height: 166px;
  text-align: center;
}
.myay_you_like .like_list .like_item .price {
  color: #333;
  font-size: 13px;
  text-align: left;
  font-weight: bold;
}
.myay_you_like .like_list .like_item .des {
  color: #a2a4a6;
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.myay_you_like .like_list .like_item img {
  width: 100px;
  height: 100px;
  
}
</style>