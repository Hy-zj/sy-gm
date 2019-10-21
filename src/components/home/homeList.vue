<template>
  <div>
    <div class="homeList">
    <div v-for="item in homeList" :key="item.id" class="homeList-home-list">
      <div class="homeList-home-img">
        <img :src="item.imgurl" alt="">
      </div>
      <div class="homeList-home-desc">{{item.desc}}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'homeList',
  data () {
   return {
     homeList: [
       {
         id: 1,
         imgurl: "//gfs8.gomein.net.cn/wireless/T1lfhXB4Kv1RCvBVdK_195_129.png",
         desc: '手机电脑'
       },
       {
         id: 2,
         imgurl: "//gfs8.gomein.net.cn/wireless/T1ufdXBgbT1RCvBVdK_195_129.png",
         desc: '国美电器'
       },
       {
         id: 3,
         imgurl: "//gfs6.gomein.net.cn/wireless/T1LQJXBmLv1RCvBVdK_195_129.png",
         desc: '国美超市'
       },
       {
         id: 4,
         imgurl: "//gfs5.gomein.net.cn/wireless/T1bLAXBTK_1RCvBVdK_195_129.png",
         desc: '美店组团'
       },
       {
         id: 5,
         imgurl: "//gfs7.gomein.net.cn/wireless/T1kiYXB4ZT1RCvBVdK_195_129.png",
         desc: '分销购'
       },
       {
         id: 6,
         imgurl: "//gfs6.gomein.net.cn/wireless/T1zihXBCZv1RCvBVdK_195_129.png",
         desc: '充值服务'
       },
       {
         id: 7,
         imgurl: "//gfs5.gomein.net.cn/wireless/T1wuxXByLv1RCvBVdK_195_129.png",
         desc: '国家美装'
       },
       {
         id: 8,
         imgurl: "//gfs8.gomein.net.cn/wireless/T1tidXBTVT1RCvBVdK_195_129.png",
         desc: '领美豆'
       },
       {
         id: 9,
         imgurl: "//gfs7.gomein.net.cn/wireless/T1RQdXB_dT1RCvBVdK_195_129.png",
         desc: '国家管家'
       },
       {
         id: 10,
         imgurl: "//gfs7.gomein.net.cn/wireless/T1zQxXBbAT1RCvBVdK_195_129.png",
         desc: '我的'
       }
     ]
   }
  }
}
</script>

<style>
.homeList{
  width: 100%;
  height: 187px;
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
}
.homeList-home-list{
  width: 20%;
  height: 93.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.homeList-home-img{
  width: 78px;
  height: 52px;
  flex-shrink: 0;
}
.homeList-home-img img{
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.homeList-home-desc{
  font-size: 12px;
  color: #333;
  line-height: 22.8px;
  margin-top: 5px;
}
</style>