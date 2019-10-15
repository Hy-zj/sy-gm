<template>
  <div class="float">
    <img src="//gfs10.gomein.net.cn/T14CCyBjKv1RCvBVdK.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'float'
}
</script>

<style scoped>
  .float{
    position: fixed;
    right: 0;
    top: 60%;
    width: 60px;
    height: 60px;
  }
  .float img{
    width: 100%;
    height: 100%;
  }
</style>