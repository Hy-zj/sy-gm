<template>
  <div>
    <van-goods-action class="detail_footer">
      <van-goods-action-icon
        icon="shop-o"
        size="23px"
        text="店铺"
        @click="onClickIcon"
        class="detail_footer_icon"
      />
      <van-goods-action-icon
        icon="like-o"
        size="23px"
        text="收藏"
        @click="onClickIcon"
        class="detail_footer_icon"
      />
      <van-goods-action-icon
        icon="cart-o"
        size="23px"
        text="购物车"
        @click="onClickIcon"
        :info="carNum"
        class="detail_footer_icon"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
        class="detail_footer_btn"
      />
      <van-goods-action-button
        type="danger"
        color="#FA1E8C"
        text="立即购买"
        class="detail_footer_btn changcolor"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
export default {
  props: { goodId: { required: true } },
  name: "detailsFooter",
  data() {
    return {
      num: 0,
      carData: {}
    };
  },
  mounted() {
    this.readCarData();
  },
  computed: {
      //计算属性，计算购物车中的商品总数
    carNum() {
      var num = 0;//初始值为0
      var keys = Object.keys(this.carData);
      keys.forEach(e => {
          //用key（商品ID）获取到加入购物车的商品数量
        num += this.carData[e];
      });
    //如果最后是0，则返回null，返回null他不会显示那个0
      return num === 0 ? null : num;
    }
  },
  //购物车功能一般在用户以后打开页面也会存在之前加入购物车的商品
  //所以选择localStorage用来存储购物车的内容
  //购物车的结构
  //key=>商品的唯一值，这里管他叫ID
  //value=>加入购物车的数量
  methods: {
      //当点击加入购物车的时候，判断有没有这个商品，没有就给他赋一个初始值1
      //如果存在的情况下，就+1
    onClickButton() {
      this.carData[this.goodId] = this.carData[this.goodId]
        ? this.carData[this.goodId] + 1
        : 1;
      console.log(this.carData);
      this.saveCarData();
    },
    onClickIcon() {},
    //存操作
    saveCarData() {
      localStorage.setItem("gm_car", JSON.stringify(this.carData));
    },
    //取操作
    readCarData() {
      let data = localStorage.getItem("gm_car");
      var tempData = JSON.parse(data);//这里我用的json字符串存原本的结构
      if (tempData) {//如果不存在或者解析失败，则不能把null值赋给carData
      //否则会报can not read xxx from null
        this.carData = tempData;//如果有数据且解析成功，就取出来给他赋值
      }
    }
  }
};
</script>

<style>
.detail_footer {
  height: 60px;
  background-color: #fafafa;
  width: 100%;
}
.detail_footer_icon {
  background-color: #fafafa;
  font-size: 12px;
}
.detail_footer_btn {
  border-radius: 0;
  height: 100%;
  font-size: 15px;
  margin-right: 0;
}
</style>