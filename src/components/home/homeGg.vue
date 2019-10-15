<template>
  <div class="homeGg">
    <ul class="list">
      <li class="list-item1">
        <img src="//gfs13.gomein.net.cn/T1m8LyBvW_1RCvBVdK.gif" alt="">
      </li>
      <li class="list-item2">
        <img src="//gfs13.gomein.net.cn/T1QHbyB7K_1RCvBVdK.gif" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeGg'
}
</script>

<style scoped>
  .homeGg{
    width: 375px;
    height: 120px;
    position: relative;
  }
  .list{
    position: absolute;
    width: 351px;
    height: 100px;
    margin-left: 13px;
    margin-top: 10px;
    display: flex;
  }
  .list-item1{
    width: 170px;
    height: 100px;
    margin-right: 11px;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .list-item1 img{
    width: 100%;
    height: 100%;
  }
  .list-item2{
    width: 170px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .list-item2 img{
    width: 100%;
    height: 100%;
  }
</style>