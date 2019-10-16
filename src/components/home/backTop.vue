<template>
  <div class="backTop">
    <div>
      <van-icon name="arrow-up" />
    </div>
    <span>顶部</span>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name: "backTop"
};
</script>

<style scoped>
.backTop {
  position: fixed;
  right: 0;
  top: 80%;
  width: 48px;
  height: 48px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 50%;
  color: rgb(153, 153, 153);
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  right: 5px;
}
.backTop-backTop span{
  font-size: 12px;
}
.backTop-backTop div{
  width: 48px;
  line-height: 20px;
  text-align: center;
}
.backTop-backTop img {
  width: 100%;
  height: 100%;
}
</style>