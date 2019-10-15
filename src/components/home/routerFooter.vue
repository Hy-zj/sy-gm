<template>
  <div class="wrap">
    <div class="wrap-one">
      <router-link to="/home" tag="span">
        <div class="wrap-img">
          <img src="//gfs10.gomein.net.cn/wireless/T1JuEXBm_v1RCvBVdK_48_48.png" alt="">
        </div>
        <div class="wrap-desc">
            首页
          </div>
      </router-link>
    </div>
    <div class="wrap-two">
      <router-link to="/list" tag="span">
      <div class="wrap-img">
          <img src="//gfs11.gomein.net.cn/wireless/T1SudXB7CT1RCvBVdK_48_48.png" alt="">
        </div>
        <div class="wrap-desc" style="color: #999">
            分类
          </div>
      </router-link>
      </div>
    <div class="wrap-tree">
      <router-link to="/goodSelect" tag="span">
      <div class="wrap-img">
          <img src="//gfs10.gomein.net.cn/wireless/T1iihXBjWT1RCvBVdK_48_48.png" alt="">
        </div>
        <div class="wrap-desc" style="color: #999">
            优选
          </div>
      </router-link>
    </div>
    <div class="wrap-four">
      <router-link to="/cart" tag="span">
      <div class="wrap-img">
          <img src="//gfs13.gomein.net.cn/wireless/T1IiDXB4xT1RCvBVdK_48_48.png" alt="">
        </div>
        <div class="wrap-desc" style="color: #999">
            购物车
          </div>
      </router-link>
    </div>
    <div class="wrap-five">
      <router-link to="/my" tag="span">
      <div class="wrap-img">
          <img src="//gfs11.gomein.net.cn/wireless/T1.fdXBKZT1RCvBVdK_48_48.png" alt="">
        </div>
        <div class="wrap-desc" style="color: #999">
            我的
          </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'routerFooter'
}
</script>

<style scoped>
.wrap{
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 55px;
  display: flex;
  background: #fff;
  border-top: 1px solid #ffffff;
}
.wrap-one{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.wrap-img{
  height: 28.8px;
  width: 28.8px;
}
.wrap-img img{
  width: 100%;
  height: 100%;
}
.wrap-desc{
  height: 18px;
  font-size: 12px;
  margin-top: 2px;
  color: red;
  text-decoration: none;
}
.wrap-two{
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap-tree{
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap-four{
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrap-five{
  flex: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>