<template>
  <div class="one_customer">
    <div class="top">
      <div class="left">评价（2.5万+）</div>
      <div class="right">
        好评度：
        <span>99%</span>
        <van-icon name="arrow" size="16px" color="#a2a4a6" />
      </div>
    </div>
    <div class="middle">
      <img src="https://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png" alt class="myself" />
      糯***d
      <img src="https://gfs11.gomein.net.cn/T1HVEQBCLT1RCvBVdK.png" alt class="grade" />
      <i class="iconfont">&#xe620;</i>
    </div>
    <div class="bottom">
        此用户没有填写内容
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "oneCustomer"
};
</script>

<style>
@import url("../../../assets/font_83zl17f2jsk/iconfont.css");
.one_customer {
  width: 100%;
  height: 138px;
  padding: 0 10px;
  color: #333;
  font-size: 13px;
}
.one_customer .top {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.one_customer .top .left {
  width: 50%;
  text-align: left;
}
.one_customer .top .right {
  width: 50%;
  text-align: right;
  color: #a2a4a6;
}
.one_customer .top .right span {
  color: #f20c59;
}
.one_customer .middle {
  width: 100%;
  height: 33.59px;
  display: flex;
  align-items: center;
}
.one_customer .middle .myself {
  width: 33.59px;
  height: 33.59px;
  border-radius: 50%;
  margin-right: 10px;
}
.one_customer .middle .grade {
  width: 18px;
  height: 18px;
  margin:0  10px;
}
.one_customer .middle .iconfont{
    color: #ffeb08;
}
.one_customer .bottom{
    font-size: 14px;
    color: #262c32;
    padding: 15px 0 20px;
    border-bottom: 1px solid #e6e6e6;
}
</style>