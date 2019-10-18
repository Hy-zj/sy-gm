<template>
  <div class="to_address">
    <div class="to_address_top">
      <div class="to">送至</div>
      <div class="address_icon">
        <img
          src="https://css.gomein.net.cn/plus/style/product/item/images/dingwei_new.b0daad8adf.png"
        />
      </div>
      <div class="address_time">
        <span>朝外街道，免运费，</span>
        <span class="address_time_detail">今日18：00：00前完成下单，预计明日（10月19日）送达</span>
      </div>
      <div class="to_address_top_right">
        <van-icon name="arrow" size="16px" color="#a2a4a6" />
      </div>
    </div>
    <div class="to_address_bottom">
      <ul>
        <li class="select_icon">
          <img src="https://css.gomein.net.cn/plus/style/product/item/images/icon1.f7bb838f89.png" />
        </li>
        <li class="free_tranform">包邮</li>
        <li class="cation_icon">
          <img
            src="https://css.gomein.net.cn/plus/style/product/item/images/xiangqing_icon.cf5718f44e.png"
          />
        </li>
        <li class="back_goods">不支持7天无理由退货</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "toAddress"
};
</script>

<style>
.to_address {
  width: 100%;
  font-size: 13px;
  height: 110px;
}
.to_address_top {
  display: flex;
  justify-content: center;
  padding: 15px 10px;
  height: 70px;
}
.to_address_top .to {
  width: 15%;
  color: #a2a4a6;
  text-align: center;
}
.to_address_top .address_icon {
  width: 5%;
}
.to_address_top .address_icon img {
  width: 15px;
  height: 13px;
}
.to_address_top .address_time {
  width: 72%;
}
.address_time_detail {
  color: #a2a4a6;
  line-height: 160%;
}
.to_address_top .to_address_top_right {
  width: 8%;
  text-align: right;
}
.to_address_bottom {
  height: 43px;
  background-color: #fafafa;
}
.to_address_bottom ul {
  list-style: none;
  width: 100%;
  color: #a2a4a6;
  font-size: 12px;
  padding: 13.5px 0;
}
.to_address_bottom ul li {
  float: left;
}
.to_address_bottom ul .select_icon {
  width: 10%;
  text-align: right;
}
.to_address_bottom ul .cation_icon {
  width: 7%;
  text-align: left;
}
.to_address_bottom ul .free_tranform {
  width: 12%;
  text-align: center;
}
.to_address_bottom ul li img {
  width: 16px;
  height: 16px;
}
.to_address_bottom ul .back_goods {
  width: 71%;
}
</style>