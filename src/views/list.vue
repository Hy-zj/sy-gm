<template>
  <div>
    <div class="header">
     <van-icon name="arrow-left" class="arrow-left"/>
      <input type="text" placeholder="家居家装 好物低至5折">
      <van-icon name="ellipsis" class="ellipsis"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

export default {
  name: 'list'
}
</script>

Vue.use(Icon);
export default {
  methods: {
   
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-around;
}
.header .arrow-left {
  font-size: 22px;
  color: #646464;
}
input{
    width: 268px;
    height: 30px;
    background-color: #f8f8f8;
    outline: none;
    border: none;
    border-radius: 15px;
}
.ellipsis{
    font-size: 22px;
  color: #646464;
}
</style>