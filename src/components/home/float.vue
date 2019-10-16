<template>
  <div>
    <div class="home-float">
    <img src="//gfs10.gomein.net.cn/T14CCyBjKv1RCvBVdK.gif" alt="">
  </div>
  </div>
</template>

<script>
export default {
  name: 'float'
}
</script>

<style scoped>
  .home-float{
    position: fixed;
    right: 0;
    top: 60%;
    width: 60px;
    height: 60px;
  }
  .home-float img{
    width: 100%;
    height: 100%;
  }
</style>