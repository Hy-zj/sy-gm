<template>
  <!-- 购物车提交页面的步进器 -->
  <div>
    <div class="stapers">
      <button class="stapers-button" type="button" @click="del">-</button>
      <input type="text" @change="countChange" ref="numbox" :value="initcount" />
      <button class="stapers-button" type="button" @click="add">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "stapers",
  props: ["initcount", "goodsid"],
  methods: {
    //步进器上监听事件
    countChange() {
      //每次修改完商品的数量，都把他更新到最新的state中
      this.$store.commit("updataGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    },
    //添加数量
    add(goodsid) {
      this.$store.commit("addnum", this.goodsid);
    },
    //减少数量
    del() {
      this.$store.commit("delnum", this.goodsid);
    }
  },
  mounted() {
    this.countChange();
  }
};
</script>

<style>
.stapers {
  height: 25px;
  display: flex;
}
.stapers button {
  width: 20px;
  border: none;
  background: #f2f2f2;
}
.stapers input {
  width: 30px;
  border: none;
  border-radius: 0;
  height: 30px;
  background: white;
  color: #666;
}
</style>