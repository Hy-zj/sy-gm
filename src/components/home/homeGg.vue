<template>
  <div class="homeGg">
    <ul class="homeGg-list">
      <li class="homeGg-list-item1">
        <img src="//gfs13.gomein.net.cn/T1m8LyBvW_1RCvBVdK.gif" alt="">
      </li>
      <li class="homeGg-list-item2">
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
  }
  .homeGg-list{
    width: 351px;
    height: 100px;
    margin:  0 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .homeGg-list-item1{
    width: 170px;
    height: 100px;
    margin-right: 11px;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .homeGg-list-item1 img{
    width: 100%;
    height: 100%;
  }
  .homeGg-list-item2{
    width: 170px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .homeGg-list-item2 img{
    width: 100%;
    height: 100%;
  }
</style>