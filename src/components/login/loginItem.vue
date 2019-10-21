<template>
  <div>
    <div class="loginItem">
    <div class="loginItem-item" v-for="item in loginItemList" :key="item.id">
      <div class="loginItem-item-img">
        <img :src="item.imgurl" alt />
      </div>
      <p class="loginItem-item-desc">{{item.desc}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "loginItem",
  data () {
    return {
      loginItemList: [
        {
         id: 1,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/huiyuanbu.png?v=2017092001",
         desc: '会员俱乐部'
       },
       {
         id: 2,
         imgurl: "//app.gomein.net.cn/plus/images/openMembershipCard/viphuiyuanka.png?v=2017092000",
         desc: '我的会员卡'
       },
       {
         id: 3,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/shoucang.png?v=2017092001",
         desc: '我的收藏'
       },
       {
         id: 4,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/fapiaozhushou.png",
         desc: '发票助手'
       },
       {
         id: 5,
         imgurl: "//css.gomein.net.cn/plus/style/store_order/yuyue.png",
         desc: '我的预约'
       },
       {
         id: 6,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/pingtuan.png?v=2017092001",
         desc: '我的拼团'
       },
       {
         id: 7,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/yijian.png?v=2017092001",
         desc: '服务规则'
       },
       {
         id: 8,
         imgurl: "//app.gomein.net.cn/plus/images/ucenter/shouhuo.png?v=2017092001",
         desc: '收货地址'
       }
      ]
    }
  }
};
</script>

<style>
.loginItem {
  width: 100%;
  height: 100%;
  background: rgb(255, 255, 255);
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.loginItem-item{
  width: 25%;
  height: 86px;
  border-right: 1px solid rgb(244, 244, 244);
  border-bottom: 1px solid rgb(244, 244, 244);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.loginItem-item-img{
  width: 24.5px;
  height: 24.5px;
}
.loginItem-item-img img{
  width: 100%;
  height: 100%;
}
.loginItem-item-desc{
  width: 83px;
  height: 13.5px;
  font-size: 13px;
  color: #666;
  margin-top: 5px;
  text-align: center;
}
</style>