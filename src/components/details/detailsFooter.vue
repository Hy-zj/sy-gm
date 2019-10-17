<template>
  <div>
      <van-goods-action class="detail_footer">
        <van-goods-action-icon icon="shop-o" size="23px" text="店铺" @click="onClickIcon" class="detail_footer_icon" />
        <van-goods-action-icon icon="like-o" size="23px" text="收藏" @click="onClickIcon" class="detail_footer_icon"/>
        <van-goods-action-icon icon="cart-o" size="23px" text="购物车" @click="onClickIcon"  info="1" class="detail_footer_icon"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" class="detail_footer_btn"/>
        <van-goods-action-button type="danger" color="#FA1E8C" text="立即购买" @click="onClickButton" class="detail_footer_btn changcolor"/>
     </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue';
import {GoodsAction,GoodsActionIcon,GoodsActionButton} from 'vant';

Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
export default {
        name:"detailsFooter",
        methods: {
            onClickButton(){},
            onClickIcon(){

            }
        }
}
</script>

<style>
.detail_footer{
    height: 60px;
    background-color: #fafafa;
    width: 100%;
}
.detail_footer_icon{
    background-color: #fafafa;
    font-size: 12px;
}
.detail_footer_btn{
    border-radius: 0;
    height: 100%;
    font-size: 15px;
    margin-right: 0;
}
</style>