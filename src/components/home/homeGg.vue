<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'homeGg'
}
</script>

<style scoped>
  .homeGg{
    width: 100%;
    height: 100%;
  }
  .homeGg-list{
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .homeGg-list-item1{
    width: 50%;
    height: 100%;
    margin-right: 11px;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .homeGg-list-item1 img{
    width: 100%;
    height: 100%;
  }
  .homeGg-list-item2{
    width: 50%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 3px;
  }
  .homeGg-list-item2 img{
    width: 100%;
    height: 100%;
  }
</style>