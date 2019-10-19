<template>
  <div class="customer_service">
    <div class="top">
      <div class="left">
        <img src="/kefu.png" alt />
      </div>
      <div class="middle">
        <p>李坡</p>
        <p>
          <i class="iconfont">&#xe620;</i>
        </p>
        <p class="num">已服务189人</p>
      </div>
      <div class="right">
        <i class="iconfont">&#xe673;</i>预约
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "customerService"
};
</script>

<style>
@import url("../../../assets/font_83zl17f2jsk/iconfont.css");
.customer_service {
  width: 100%;
  height: 128px;
  color: #333;
}
.customer_service .top {
  widows: 100%;
  height: 110px;
  padding: 0 10px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.customer_service .top .left {
  width: 30%;
}
.customer_service .top .left img {
  width: 78px;
  height: 84px;
}
.customer_service .top .middle {
  width: 50%;
  font-size: 13px;
}
.customer_service .top .middle .num {
  color: #666;
  padding-top: 20px;
}
.customer_service .top .middle .iconfont {
  color: #ffeb09;
}
.customer_service .top .right {
  width: 20%;
  font-size: 14px;
  margin-right: -10px;
  margin-bottom: -50px;
}
.customer_service .top .right .iconfont {
  font-size: 18px;
  padding-right: 10px;
}
.customer_service .bottom {
  width: 100%;
  height: 18px;
}
</style>