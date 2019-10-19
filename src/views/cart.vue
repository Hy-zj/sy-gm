<template>
  <div>
    <cartHeader></cartHeader>
    <cartNav></cartNav>
    <cartMain></cartMain>
  </div>
</template>

<script>
import cartHeader from '../components/cart/cartHeader'
import cartNav from '../components/cart/cartNav'
import cartMain from '../components/cart/cartMain'
export default {
  name: 'cart',
  data() {
    return {
      tab: false
    }
  },
  components: {
    cartHeader,
    cartNav,
    cartMain
  }
}
</script>

<style scoped>

</style>