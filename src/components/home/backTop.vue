<template>
  <div class="backTop" @click="backTop" v-if="btnFlag">
    <div>
      <van-icon name="arrow-up" />
    </div>
    <span>顶部</span>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "backTop",
  data() {
    return {
      btnFlag: false
    };
  },
  // 回到顶部特效当移动大于60px显示
  mounted() {
    window.addEventListener("scroll", this.scrollToTop1);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop1() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style scoped>
.backTop {
  position: fixed;
  right: 0;
  top: 80%;
  width: 48px;
  height: 48px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 50%;
  color: rgb(153, 153, 153);
  z-index: 999;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  right: 5px;
}
.backTop-backTop span {
  font-size: 12px;
}
.backTop-backTop div {
  width: 48px;
  line-height: 20px;
  text-align: center;
}
.backTop-backTop img {
  width: 100%;
  height: 100%;
}
</style>