<template>
  <div>
    <div class="evaluate">
      <div class="evaluate-nav">
        <div class="evaluate-nav-left">
          <div class="evaluate-nav-left-one">全部</div>
          <div class="evaluate-nav-left-two">好评(6.4w)</div>
          <div class="evaluate-nav-left-tree">中评(18)</div>
          <div class="evaluate-nav-left-four">差评(14)</div>
          <div class="evaluate-nav-left-five">有图(302)</div>
          <div class="evaluate-nav-left-six">不看默认评论</div>
        </div>
         <div class="evaluate-nav-right">
           <div class="evaluate-nav-right-top">
             好评度
           </div>
           <div class="evaluate-nav-right-bottom">
             99%
           </div>
        </div>
      </div>
      <div class="evaluate-main">
        <div class="evaluate-main-item" v-for="item in evaluateList" :key="item.id">
          <div class="evaluate-main-item-one">
            <div class="evaluate-icon1">
              <img :src="item.imgurl" alt />
            </div>
            <div class="evaluate-icon2">gm_^_^185253253</div>
            <div class="evaluate-icon3">
              <img :src="item.img" alt />
            </div>
            <div class="evaluate-icon4">{{item.xing}}</div>
            <div class="evaluate-icon5">{{item.timer}}</div>
          </div>
          <div class="evaluate-main-item-two">{{item.maintext}}</div>
          <div class="evaluate-main-item-tree">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evaluate",
  data() {
    return {
      evaluateList: [
        {
          id: 1,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 2,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 3,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 4,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 5,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 6,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        },
        {
          id: 7,
          imgurl: "//gfs9.gomein.net.cn/T1lEb_BvYT1RCvBVdK.jpg",
          img: "//gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png",
          username: "gm_^_^185253253",
          timer: "2019-10-18",
          maintext: "666",
          desc: "规格：新品55A4U",
          xing: "*****"
        }
      ]
    }
  },
};
</script>

<style>
.evaluate {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.evaluate-nav {
  width: 100%;
  height: 100px;
  display: flex;
  padding: 15px 0 0 15px;
   border-bottom: 1px solid #f2f2f2;
}
.evaluate-nav-left{
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  font-size: 12px;
}
.evaluate-nav-left-one{
  width: 60px;
  line-height: 30px;
  height: 30px;
  font-size: 16px;
  background: red;
  color: #f2f2f2;
  border-radius: 8px;
  text-align: center;
}
.evaluate-nav-left-two{
  width: 60px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffe4bd;
  margin-left: 5px;
  margin-top: 5px;
}
.evaluate-nav-left-tree{
  width: 60px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffe4bd;
  margin-left: 5px;
  margin-top: 5px;
}
.evaluate-nav-left-four{
  width: 60px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffe4bd;
  margin-left: 5px;
  margin-top: 5px;
}
.evaluate-nav-left-five{
  width: 60px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffe4bd;
  margin-left: 5px;
  margin-top: 5px;
}
.evaluate-nav-left-six{
  width: 80px;
  line-height: 20px;
  height: 20px;
  text-align: center;
  border-radius: 8px;
  background: #ffe4bd;
  margin-left: 5px;
  margin-top: 5px;
}
.evaluate-nav-right{
  display: flex;
  flex-direction: column;
  width: 60px;
}
.evaluate-nav-right-top{
  width: 60px;
  font-size: 14px;
  color: #919599;
  line-height: 30px;
}
.evaluate-nav-right-bottom{
  width: 60px;
  color: red;
  line-height: 50px;
}
.evaluate-main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
}
.evaluate-main-item {
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 10px;
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 15px; 
  background: white;
}
.evaluate-main-item-one{
  width: 100%;
  height: 60px;
  display: flex;
}
.evaluate-icon1{
  width: 40px;
  height: 40px;
  
  
}
.evaluate-icon1 img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #bbb;
}
.evaluate-icon2{
  width: 130px;
  height: 40px;
  font-size: 13px;
  line-height: 40px;
  margin-left: 5px;
  
}
.evaluate-icon3{
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.evaluate-icon4{
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.evaluate-icon5{
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: #919599;
  margin-left: 20px;
}
.evaluate-icon3 img{
  width: 100%;
  height:  100%;
}
.evaluate-main-item-two{
  width: 100%;
  line-height: 40px;
  display: flex;
}
.evaluate-main-item-tree{
  width: 100%;
  height: 30px;
  display: flex;
  color: #919599;
  font-size: 12px;
  margin-top: 10px;
}
</style>