<template>
  <div>
    <div class="showList">
      <ul>
        <li v-for="item in shopName" :key="item.id">
           <span class="showList-title">
             {{item.name}}
           </span>
           <span class="showList-desc">
             {{item.desc}}
           </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "showList",
  data(){
    return {
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
    }
  }
}
</script>

<style>
.showList{
  width: 100%;
  height: 100%;
}
.showList ul li{
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
}
.showList-title{
  flex: 1;
  padding-left: 15px;
  font-size: 14px;
  line-height: 52.8px; 
  color: #666;
}
.showList-desc{
  width: 60px;
  padding-left: 15px;
  font-size: 12px;
  line-height: 52.8px; 
  color: #ccc;
}
</style>