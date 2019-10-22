<template>
<!-- 搜索弹出页面 -->
  <div>
    <div class="showList">
      <ul>
        <li v-for="item in showShopList" :key="item.id">
          <router-link :to="{path: '/searchList', query: {name: item.name}}">
            <div>
              <span class="showList-title">{{item.name}}</span>
              <span class="showList-desc">{{item.desc}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "showList",
  data() {
    return {
      showShopList: [],
      shopName: [
        {
          id: "001",
          name: "华为手机",
          desc: "4 条"
        },
        {
          id: "002",
          name: "小米手机",
          desc: "4 条"
        },
        {
          id: "003",
          name: "苹果手机",
          desc: "4 条"
        },
        {
          id: "004",
          name: "锤子手机",
          desc: "4 条"
        },
        {
          id: "005",
          name: "一加手机",
          desc: "4 条"
        },
        {
          id: "006",
          name: "魅族手机",
          desc: "4 条"
        },
        {
          id: "007",
          name: "红米手机",
          desc: "5 条"
        }
      ]
    };
  },
  methods: {
    filterdata(){
      this.shopName.some(item=>{
        if (item.name.includes(this.$store.state.message)) {
          this.showShopList.push(item)
        }
      })
    }
  },
  mounted(){
    this.filterdata()
  }
};
</script>

<style>
.showList {
  width: 100%;
  height: 100%;
}
.showList ul li div{
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.showList-title {
  flex: 1;
  padding-left: 15px;
  font-size: 14px;
  line-height: 52.8px;
  color: #666;
}
.showList-desc {
  width: 60px;
  padding-left: 15px;
  font-size: 12px;
  line-height: 52.8px;
  color: #ccc;
}
</style>