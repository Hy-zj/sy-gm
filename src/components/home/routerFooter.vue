<template>
 <div>
    <div class="router-wrap">
    <div class="router-wrap-one">
      <router-link to="/home" tag="span">
        <div class="router-wrap-img">
          <img src="//gfs10.gomein.net.cn/wireless/T1JuEXBm_v1RCvBVdK_48_48.png" alt />
        </div>
        <div class="router-wrap-desc">首页</div>
      </router-link>
    </div>
    <div class="router-wrap-two">
      <router-link to="/list" tag="span">
        <div class="router-wrap-img">
          <img src="//gfs11.gomein.net.cn/wireless/T1SudXB7CT1RCvBVdK_48_48.png" alt />
        </div>
        <div class="router-wrap-desc" style="color: #999">分类</div>
      </router-link>
    </div>
    <div class="router-wrap-tree">
      <a href="https://prom.m.gome.com.cn/html/prodhtml/topics/201909/26/saleJ8gDXKVNgH3.html"><div class="router-wrap-img">
          <img src="//gfs10.gomein.net.cn/wireless/T1iihXBjWT1RCvBVdK_48_48.png" alt />
        </div>
        <div class="router-wrap-desc" style="color: #999">优选</div></a>
    </div>
    <div class="router-wrap-four">
      <router-link to="/cart" tag="span">
        <div class="router-wrap-img">
          <img src="//gfs13.gomein.net.cn/wireless/T1IiDXB4xT1RCvBVdK_48_48.png" alt />
        </div>
        <div class="router-wrap-desc" style="color: #999">购物车</div>
      </router-link>
    </div>
    <div class="router-wrap-five">
      <router-link to="/my" tag="span">
        <div class="router-wrap-img">
          <img src="//gfs11.gomein.net.cn/wireless/T1.fdXBKZT1RCvBVdK_48_48.png" alt />
        </div>
        <div class="router-wrap-desc" style="color: #999">我的</div>
      </router-link>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: "routerFooter"
}
</script>

<style>
.router-wrap {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 55px;
  display: flex;
  background: #fff;
  border-top: 1px solid #ffffff;
   z-index: 10;
  /* transform: translateZ(0);
  overflow-y: auto; */
}
.router-wrap-one {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.router-wrap-img {
  height: 28.8px;
  width: 28.8px;
}
.router-wrap-img img {
  width: 100%;
  height: 100%;
}
.router-wrap-desc {
  height: 18px;
  font-size: 12px;
  margin-top: 2px;
  color: red;
  text-decoration: none;
}
.router-wrap-two {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-wrap-tree {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-wrap-four {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.router-wrap-five {
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>