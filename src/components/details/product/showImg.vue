<template>
  <div class="show_img">
    <div class="top">
      <div class="left">有图评价（575）</div>
      <div class="right">
        <van-icon name="arrow" size="16px" color="#a2a4a6" />
      </div>
    </div>
    <div class="middle">
        <div class="middle1">
            <img src="https://gfs9.gomein.net.cn/T1vCAyBvxv1RCvBVdK_200.jpg" alt=""><span class="pic_num pic_num1">1张</span>
            <div>黄***云<img src="https://gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png" alt="" class="grade"></div>
        </div>
        <div class="middle2">
             <img src="https://gfs9.gomein.net.cn/T1vCAyBvxv1RCvBVdK_200.jpg" alt=""><span class="pic_num pic_num2">1张</span>
            <div>黄***云<img src="https://gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png" alt="" class="grade"></div>
        </div>
        <div class="middle3">
             <img src="https://gfs5.gomein.net.cn/T1wHhyBvL_1RCvBVdK_200.jpg" alt=""><span class="pic_num pic_num3">1张</span>
            <div>熊***华<img src="https://gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png" alt="" class="grade"></div>
        </div>
        <div class="middle4">
             <img src="https://gfs9.gomein.net.cn/T1vCAyBvxv1RCvBVdK_200.jpg" alt=""><span class="pic_num pic_num4">1张</span>
            <div>慕***洋<img src="https://gfs11.gomein.net.cn/T1BqbgBCLT1RCvBVdK.png" alt="" class="grade"></div>
        </div>
    </div>
    <div class="bottom">
        <div class="bottom_left">
            <img src="https://css.gomein.net.cn/plus/style/product/item/images/icon_pingjia_xiangqing.png" alt="">
            <span>全部评价（2.5万+）</span>
        </div>
        <div class="bottom_right">
            <img src="https://css.gomein.net.cn/plus/style/product/item/images/icon_zixun_xiangqing.baa035a976.png" alt="">
            <span>购买咨询（0）</span>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
    name:"showImg"
};
</script>

<style>
.show_img{
    width: 100%;
    height: 252px;
}
.show_img .top{
    padding: 0 10px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.show_img .top .left{
    width: 50%;
    text-align: left;
    font-size: 13px;
    color: #333;
}
.show_img .top .right{
    width: 50%;
    text-align: right;
}
.show_img .middle{
    padding: 0 10px;
    width: 100%;
    height: 138px;
     position: relative;
    display: flex;
    justify-content: space-between;
}
.show_img .middle img{
    width: 80px;
    height: 108px;
   
}
.show_img .middle .grade{
    width: 18px;
    height: 18px;
    margin-left:5px;
    vertical-align: middle;
}
.pic_num{
    position: absolute;
    width: 31px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
}
.pic_num1{
    left: 10px;
    bottom: 30px;
    width: 31px;
}
.pic_num2{
    left: 102px;
    bottom: 30px;
    width: 31px;
}
.pic_num3{
    left: 193px;
    bottom: 30px;
    width: 31px;
}
.pic_num4{
    left: 285px;
    bottom: 30px;
    width: 31px;
}
.show_img .bottom{
    width: 100%;
    height: 55px;
    border-top: 1px solid #e6e6e6;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-size: 13px;
    text-align: center;
}
.show_img .bottom .bottom_left{
    width: 50%;
    padding: 3px 0;
    border-right:  1px solid #e6e6e6;
}
.show_img .bottom .bottom_right{
    width: 50%;
}
.show_img .bottom img{
    width: 20.39px;
    height: 20.39px;
    vertical-align: middle;
}
.show_img .bottom span{
    padding-left: 8px;
}
</style>