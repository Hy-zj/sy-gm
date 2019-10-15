<template>
  <div>
    <Navigation></Navigation>
    <homeSwiper></homeSwiper>
    <homeList></homeList>
    <homeGg></homeGg>
    <homeDt></homeDt>
    <homeSp></homeSp>
    <homeSpone></homeSpone>
    <homeBangdan></homeBangdan>
    <homeJx></homeJx>
    <homeRx></homeRx>
    <homePb></homePb>
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

</style>