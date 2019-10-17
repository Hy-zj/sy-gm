<template>
  <div class="home">
    <Navigation></Navigation>
    <homeSwiper></homeSwiper>
    <homeList class="main"></homeList>
    <homeGg></homeGg>
    <homeDt class="main"></homeDt>
    <homeSp class="main"></homeSp>
    <homeSpone class="main"></homeSpone>
    <homeBangdan class="main"></homeBangdan>
    <homeJx class="main"></homeJx>
    <homeRx class="main"></homeRx>
    <homePb class="main"></homePb>
    <float></float>
    <backTop></backTop>
    <routerFooter></routerFooter>
  </div>
</template>

<script>
import Navigation from '../components/home/Navigation'
import routerFooter from '../components/home/routerFooter'
import homeSwiper from '../components/home/homeSwiper'
import homeList from '../components/home/homeList'
import homeGg from '../components/home/homeGg'
import homeDt from '../components/home/homeDt'
import homeSp from '../components/home/homeSp'
import homeSpone from '../components/home/homeSpone'
import homeBangdan from '../components/home/homeBangdan'
import homeJx from '../components/home/homeJx'
import homeRx from '../components/home/homeRx'
import homePb from '../components/home/homePb'
import float from '../components/home/float'
import backTop from '../components/home/backTop'
export default {
  name: 'home',
  components: {
    routerFooter,
    Navigation,
    homeSwiper,
    homeList,
    homeGg,
    homeDt,
    homeSp,
    homeSpone,
    homeBangdan,
    homeJx,
    homeRx,
    homePb,
    float,
    backTop
  }
}
</script>

<style>
.home{
  width: 100vw;
  height: 100vh;
}
.main{
  margin: 0 15px;
}
</style>