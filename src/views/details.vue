<template>
  <div>
      <detailsTop class="details_top"></detailsTop>
      <div class="middle"></div>
      <div class="middle1"></div>
      <detailsFooter class="details_foot"></detailsFooter>
  </div>
</template>

<script>
import detailsTop from  '../components/details/detailTop'
import detailsFooter from '../components/details/detailsFooter'

export default {
name:"detail",
components:{
    detailsTop,
    detailsFooter,
}
}
</script>

<style>
.details_top{
    position: fixed;
    top: 0;
    left: 0;
}
.middle{
    height: 1000px;
    width: 100%;
    margin-top: 54px;
    overflow: auto;
    background-color: brown;
}
.middle1{
    height: 1000px;
    width: 100%;
    overflow: auto;
    background-color: green;
}
.details_foot{
    position: fixed;
    bottom: 0;
    left: 0;
}

</style>