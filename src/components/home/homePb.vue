<template>
  <div>
    <div class="homePb">
      <div class="homePb-homePb-img">
        <img src="//gfs10.gomein.net.cn/wireless/T1Go_jBjD_1RCvBVdK_1065_129.png" />
      </div>
      <div class="homePb-homePb-list">
        <ul>
          <li class="homePb-item1" v-for="item in homePbList" :key="item.id">
            <div class="homePb-list-item">
              <img :src="item.imgurl" />
            </div>
            <div class="homePb-desc">
              <span class="homePb-tag">自营</span>
              {{item.desc}}
            </div>
            <div class="homePb-icon">劵1000减20</div>
            <div class="homePb-icon1">节约能耗</div>
            <div class="homePb-pic">
              <span class="homePb-item1">{{item.pick}}</span>
              <span class="homePb-item2">看相似</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePb",
  data() {
    return {
      homePbList: [
        {
          id: 1,
          imgurl: "//gfs17.gomein.net.cn/T1QPKTB4Ev1RCvBVdK_260.jpg?v=2",
          desc:
            "美的（Midea）1.5匹 一级能效 全直流变频 冷暖壁挂式空调 冷静星Ⅱ KFR-35GW/BP3DN8Y-PH200(B1)",
          pick: "￥27000"
        },
        {
          id: 2,
          imgurl: "//gfs17.gomein.net.cn/T1wgV_B_Av1RCvBVdK_260.jpg?v=2",
          desc:
            "魔蝎手（MOGEGAME）WM1009 无线鼠标 黑色 超薄便携/MAC苹果笔记本/男女生家用 【香肠派对 明日之后",
          pick: "￥9.99"
        },
        {
          id: 3,
          imgurl: "//gfs17.gomein.net.cn/T1GTKTBTxg1RCvBVdK_260.jpg?v=2",
          desc:
            "老板(ROBAM) CXW-200-8229S 抽油烟机 塔形 大吸力 不锈钢 触控 银色",
          pick: "￥9980.00"
        },
        {
          id: 4,
          imgurl: "//gfs17.gomein.net.cn/T18rAQB5CT1RCvBVdK_260.jpg?v=2",
          desc:
            "美的（Midea） 大1匹 一级能效 全直流变频 冷暖壁挂式空调 冷静星Ⅱ KFR-26GW/BP3DN8Y-PH200(B1)",
          pick: "￥2499.00"
        },
        {
          id: 5,
          imgurl: "//gfs17.gomein.net.cn/T10udvBTVT1RCvBVdK_260.jpg?v=2",
          desc: "方太(FOTILE) JZT-TH1B 燃气灶 双眼灶 天然气",
          pick: "￥2499.00"
        },
        {
          id: 6,
          imgurl: "//gfs17.gomein.net.cn/T1fJWsB7h_1RCvBVdK_260.jpg?v=2",
          desc:
            "【香肠派对 明日之后】小米(MI) Redmi AirDots 真无线蓝牙耳机 收纳充电盒 蓝牙5.0 按键防触控操作 黑色",
          pick: "￥129.80"
        },
        {
          id: 7,
          imgurl: "//gfs17.gomein.net.cn/T190bTB5hT1RCvBVdK_260.jpg?v=2",
          desc:
            "美的（Midea） FS40-15F1 黑 三档风速 创新扇盒紧固旋钮 无需螺丝刀安装 电风扇",
          pick: "￥298.00"
        },
        {
          id: 8,
          imgurl: "//gfs17.gomein.net.cn/T1C7xgBQCv1RCvBVdK_260.jpg?v=2",
          desc: "的立 LGJQJ-051-2kg 洗衣液 净白 透亮",
          pick: "￥32.00"
        },
        {
          id: 9,
          imgurl: "//gfs17.gomein.net.cn/T1qDAsB7Kv1RCvBVdK_260.jpg?v=2",
          desc:
            "海尔（Haier）BC/BD-203HE 203升冷柜 超薄彩晶小富豪 气悬浮减霜 家用商用二合一 卧式冰箱 白色",
          pick: "￥1799.00"
        },
        {
          id: 10,
          imgurl: "//gfs17.gomein.net.cn/T17qC_BCdT1RCvBVdK_260.jpg?v=2",
          desc:
            "苏泊尔（SUPOR） SDHC9E15-210M 电磁炉 多功能大功率 电磁炉电磁灶4D防水",
          pick: "￥189.00"
        }
      ]
    };
  }
};
</script>

<style>
.homePb {
  width: 100%;
  height: 100%;
  /* margin: 15px 15px; */
  border: 1px solid #f2f2f2;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
}
.homePb-homePb-img {
  flex: 1;
  margin: 0;
  background: rgb(242, 242, 242)
}
.homePb-homePb-img img {
  width: 100%;
  height: 100%;
}
.homePb-homePb-list {
  flex: 1;
  display: flex;
  overflow: hidden;
  background: rgb(242, 242, 242)
}
.homePb-homePb-list ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background: rgb(242, 242, 242)
}
.homePb-homePb-list ul li {
  list-style: none;
  width: 50%;
  opacity: 1;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  background: white;
}
.homePb-list-item {
  flex: 1;
}
.homePb-list-item img {
  width: 100%;
  height: 100%;
}
.homePb-desc {
  width: 173px;
  height: 36px;
  margin: 0 0 9.6px;
  color: #333;
  padding: 0 12px;
  overflow: hidden;
  font-size: 12px;
}
.homePb-tag {
  width: 30.78px;
  height: 18.38px;
  margin: 0 6px 0 0;
  padding: 1.2px 2.4px;
  display: inline-block;
  color: #fd0175;
  border: 1px solid #fd0175;
  border-radius: 3px;
}
.homePb-icon {
  width: 73.02px;
  line-height: 13.98px;
  color: #fff;
  background: #fe526b;
  padding: 1.02px, 2.4px;
  margin: 0px -6.96px 12px 12px;
  border: 1px solid #fe526b;
  border-radius: 3px;
  vertical-align: middle;
  font-size: 12px;
}
.homePb-icon1 {
  width: 54.78px;
  line-height: 13.98px;
  border: 1px solid #2aa80d;
  border-radius: 3px;
  background: #fff;
  color: #2aa80d;
  padding: 1.02px, 2.4px;
  margin: 0px -6.96px 12px 12px;
  border-radius: 3px;
  vertical-align: middle;
  font-size: 12px;
}
.homePb-pic {
  width: 173px;
  display: flex;
  padding-bottom: 10px;
}
.homePb-pic .homePb-item1 {
  width: 149px;
  height: 21px;
  display: block;
  font-size: 16px;
  color: #f20c59;
  margin-left: 10px;
}
.homePb-pic .homePb-item2 {
  padding: 0;
  text-align: center;
  border: 1px solid #e6e6e6;
  width: 49.19px;
  line-height: 20.8px;
  font-size: 12px;
  color: #999;
  border-radius: 8px;
  margin-right: 10px;
}
</style>