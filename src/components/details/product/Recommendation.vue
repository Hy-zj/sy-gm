<template>
  <div class="product_selected">
     <div class="product_selected_top">
         <div class="product_selected_top_left">已选</div>
         <div class="product_selected_top_middle">i5/8G/128G SSD 1个</div>
         <div class="product_selset_arrow_right">
             <van-icon name="arrow" size="16px" color="#a2a4a6"/>
         </div>
     </div>
     <div class="product_selected_bottom">
         <span class="tuijian">推荐</span>
         <span>增值服务 搭配购</span>
     </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {

}
</script>

<style>
.product_selected{
    width: 100%;
    padding: 10px;
    font-size: 13px;
}
.product_selected_top{
    display: flex;
    justify-content: center;
    align-items: center;
}
.product_selected_top_left{
    width: 15%;
    color: #a2a4a6;
    text-align: center;
}
.product_selected_top_middle{
    width: 75%;
    color: #333;
}
.product_selset_arrow_right{
    width: 10%;
    text-align: right;
}
.product_selected_bottom{
    padding-top: 5px;
}
.product_selected_bottom .tuijian{
    color: #a2a4a6;
    display: inline-block;
    width: 15%;
    text-align: center;
}
.product_selected_bottom span{
    color: #197fe7;
}
</style>