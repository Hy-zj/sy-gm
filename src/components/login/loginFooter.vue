<template>
  <div class="loginFooter">
    <van-divider :style="{ color: '#999', borderColor: '#999', padding: '0' }">你可能喜欢</van-divider>
    <div class="loginFooter-list">
      <div class="loginFooter-main">
        <ul class="loginFooter-list">
          <li class="loginFooter-item" v-for="item in loginFooterList" :key="item.id">
            <div class="loginFooter-item-one">
              <img :src="item.imgurl" />
            </div>
            <p class="loginFooter-item-two">{{item.desc}}</p>
            <div class="loginFooter-item-tree">
              <p class="loginFooter-item-tree-desc">{{item.pick}}</p>
              <span class="loginFooter-item-tree-icon">
                <img
                  src="//css.gomein.net.cn/plus/style/index/images/grass_cart.png?v=2017092001"
                  alt
                />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";

Vue.use(Divider);
export default {
  name: "loginFooter",
  data() {
    return {
      loginFooterList: [
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
.loginFooter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.loginFooter-title {
  width: 83px;
  height: 29px;
  line-height: 29px;
  text-align: center;
  font-size: 12px;
  color: #666;
  margin: 15px auto;
}

.loginFooter-main {
  width:100%;
  height: 100%;
}
.loginFooter-list {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.loginFooter-item {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3px;
}
.loginFooter-item-one {
  flex: 1;
  padding: 6px 6px 0;
}
.loginFooter-item-one img {
  width: 100%;
  height: 100%;
}
.loginFooter-item-two {
  width: 152px;
  height: 32px;
  padding: 0 0 2.5px;
  margin: 0 auto;
  font-size: 13px;
  overflow: hidden;
  color: #333;
}
.loginFooter-item-tree {
  width: 152px;
  height: 24px;
  padding: 0 0 2.5px;
  margin: 25px auto 0 auto;
  display: flex;
}
.loginFooter-item-tree-desc {
  width: 152px;
  line-height: 16px;
  margin: 0 auto;
  color: #f20c59;
}
.loginFooter-item-tree-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto;
}
.loginFooter-item-tree-icon img {
  width: 100%;
  height: 100%;
}
</style>