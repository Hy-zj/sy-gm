<template>
  <div>
    <div class="stapers">
      <button class="stapers-button" type="button" @click="del">-</button>
      <input type="text" @change="countChange" ref="numbox" :value="initcount"/>
      <!-- <span>{{initcount}}</span> -->
        <!-- :value="initcount" -->
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
      // console.log(this.$refs.numbox.value)
      console.log('ssssss')
      //每次修改完商品的数量，都把他更新到最新的state中
      this.$store.commit("updataGoodsInfo", {
        id: this.goodsid,
        count: this.$refs.numbox.value
      });
    },
    //添加数量
    add(goodsid) {
      this.$store.commit("addnum",this.goodsid);
    },
    //减少数量
    del() {
        this.$store.commit("delnum",this.goodsid);
    }
  },
  mounted(){
    this.countChange
    //  console.log(this.$refs.numbox.value)
    console.log(this.$store.getters.getAllCount)
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
}
.stapers input {
  width: 30px;
}
</style>