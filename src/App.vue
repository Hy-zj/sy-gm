<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  width: 100vw;
  height: 3000px;
  background: #f5f3f7;
  overflow: auto;
}
</style>
