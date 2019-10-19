<template>
  <div class="loginMy">
    <loginHeader></loginHeader>
    <loginNav></loginNav>
    <loginMain></loginMain>
    <loginList></loginList>
    <loginItem></loginItem>
    <loginFooter></loginFooter>
  </div>
</template>

<script>
import loginHeader from '../components/login/loginHeader'
import loginNav from '../components/login/loginNav'
import loginMain from '../components/login/loginMain'
import loginList from '../components/login/loginList'
import loginItem from '../components/login/loginItem'
import loginFooter from '../components/login/loginFooter'
export default {
  name: "loginMy",
  components: {
    loginHeader,
    loginNav,
    loginMain,
    loginList,
    loginItem,
    loginFooter
  }
}
</script>

<style>
.loginMy{
  background: rgb(242, 242, 242);
}
</style>