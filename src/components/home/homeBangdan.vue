<template>
  <div class="main">
    <div class="homeBangdan">
      <div class="homeBangdan-homeBangdan-left">
        <van-swipe :autoplay="5000" indicator-color="white">
          <van-swipe-item>
            <div class="homeBangdan-item">
              <h1>户外运动榜</h1>
              <p class="homeBangdan-item1">近30天</p>
              <p class="homeBangdan-item2">月销176</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeBangdan-item">
              <h1>汽车用品榜</h1>
              <p class="homeBangdan-item1">近30天</p>
              <p class="homeBangdan-item2">月销2.2万</p>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeBangdan-item">
              <h1>数码摄影榜</h1>
              <p class="homeBangdan-item1">近30天</p>
              <p class="homeBangdan-item2">月销2.1万</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="homeBangdan-homeBangdan-right">
        <van-swipe :autoplay="3000" indicator-color="white" :show-indicators="false">
          <van-swipe-item>
            <div class="homeBangdan-item-list">
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1sCb_B_bv1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥28</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1BDKTB5_T1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥19.9</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1e6_gB5ZT1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥23</div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeBangdan-item-list">
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1sCb_B_bv1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥28</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1BDKTB5_T1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥19.9</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1e6_gB5ZT1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥23</div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="homeBangdan-item-list">
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1sCb_B_bv1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥28</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1BDKTB5_T1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥19.9</div>
              </div>
              <div class="homeBangdan-icon">
                <div class="homeBangdan-icon1">
                  <img src="//gfs17.gomein.net.cn/T1e6_gB5ZT1RCvBVdK_160.jpg" alt />
                </div>
                <div class="homeBangdan-icon2">￥23</div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  name: "homeBangdan"
};
</script>

<style>
.homeBangdan {
  width: 100%;
  height: 100%;
  /* margin: 0 15px; */
  border: 1px solid #f2f2f2;
  background: white;
  display: flex;
  border-radius: 0 0 8px 8px;
}
.homeBangdan-homeBangdan-left {
  /* width: 95.92px;
  height: 102.06px; */
  width: 25%;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADZCAMAAABigJ6zAAAA/1BMVEUAAAD////5+fn4+Pj4+Pj39/f4+Pj4+Pj4+Pj////4+Pj4+Pj4+Pj4+Pj39/f4+Pj4+Pj4+Pj4+Pj////4+Pj5+fn6+vr4+Pj39/f5+fn6+vr6+vr5+fn+/v739/f4+Pj4+Pj4+Pj5+fn5+fn6+vr5+fn4+Pj4+Pj39/f4+Pj39/fftmH18uvs2bL07+XozZXu4MLivnHy6tnx5tDw5czr163lxoblxoX39vTu3r3q1KThu2zz7Nzx59Lp0Z/humrx6NXv4sbr1afozpjny5Hkw37iv3bguGXx59Ht3LfmyYz28+3r1qvo0Jzlx4jjwXr29PH08Oj07uHp0qHhvG7ML0scAAAAKnRSTlMACytLiur0zqoGbmru1Mq+rpWPEvifNSSDUD0uKRvj3LaOfXdeWNrWZEXWo7Y+AAAD3ElEQVR42uzUwQnAIBAF0cWD4EFEy9j+Cwwmp5Qwy7wOhg8/rnZmT7w+T4vP2FnGHm/RykLWbSq00bUjWhbT4mQxJ2YWM6PAe//1yHJMIjCJwCQCkwhMIjCJwCQCkwhMIjCJwCQCkwhMIjCJwCQCkwhMIjCJwCQCkwhMIjCJwCSChz37ypEUhqIwvJ9zMTnnDEWlTvtfywAjoKfQtEajvi25xPdYb7+MbF/XkSSDI0kGP5SkJLoQeqKA3c8kKcLLXC0MNTfzBH8Vf5LiRKntY+bbaeQwR/EnmYam4hNVM0ww4k/qycIDK9LBhz1Jp3VJrLUtph5suJPMKMbCdbefyQQX5iTFsLDIiXIsLEMBE+YkR8PqRnTDSnPAhDdJiVQschrlWKiRAh68SSLFaqDRgFUqwIM3ybPxm2oJmglrWTfbAw/WJCXzAbWs7x190t3rUgX8TAEL1qTExaiknRIjNwEL1iRdw+RCDy6YaDpYfJHkv5yVV1V9i2MzT3rLLgpdD4LTSQjnUoZheq0qra6Hm+t6TXNvW8P4yLqOrliJEDOH/uBgFgosrtR12YdhtO29aTzXvQ11rVXVNQ3D8uIIcToFga4XhW31SW7G8ZuqvirnF/8bkoIt6X1L8pakaEqq9kkQ9InALqmakqIlyduS3rek4F+T+D+8mbNbI74Pj397mAW0CjCTdHuYN/FZ+bDbQdZNfDtqB1oNmMh61G4XIoNGnkcjAxNpL0TLtfVMRI0N2A0RnQHIe21dhouc2gKzoqUcgLzDxTIC2sF6hPiBDcg8Av5tIo8jaQd1oKcYOybpYMOeBD3aP3pRDz7H0+R/eMYHZDzhM//o+f6M+dqRdCQ9hyNJBkeSDI4kGRxJMjiSZHAkyeBIksGvduoEJ2EgAKNwWcq+Scu+uYJy/wMqINFYESFt6EveO8F8mZlfEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRkkRIEiFJhCQRknR5YadWbpbmhcX0+XHQXVe2iTCkT0o9+NFi+PJ0d9/+Rss96UApFoIzRcNJo9+rtnJM+qJcVqFYapZrnTBHpATlyuqjt9fxoLuMb0cKq0dKyo32O7KKryfFV1AaWVDS2pE4aG//V6vae8iEkvaObILxeUo2t5LVjoyDaPXXrcxuTzm1IydE648Tj8IkZZJDSoL2644sh/vHWq4cKH0EJdFiutuRzQ4RD6IjeD6PAnzR7PDj3wGJCWercPWhJQAAAABJRU5ErkJggg==);
  background-size: 100%;
  background-repeat: no-repeat;
  color: #333;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.homeBangdan-homeBangdan-right {
  width: 75%;
  height: 100%;
}
.homeBangdan-item {
  flex: 1;
}
.homeBangdan-item h1 {
  color: #333;
  font-size: 16px;
  text-align: center;
  padding-right: 5px;
}
.homeBangdan-item1 {
  width: 95.92px;
  line-height: 14.39px;
  color: #666;
  font-size: 12px;
  margin-top: 28px;
  text-align: center;
}
.homeBangdan-item2 {
  width: 95.92px;
  line-height: 16.8px;
  color: #666;
  font-size: 12px;
  text-align: center;
}
.homeBangdan-item-list {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 15px;
}
.homeBangdan-icon {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homeBangdan-icon1 {
  flex: 1;
}
.homeBangdan-icon1 img {
  width: 100%;
  height: 100%;
}
.homeBangdan-icon2 {
  width: 65.61px;
  height: 14px;
  font-size: 12px;
  color: #999;
  margin: 7.2px 0 0;
  text-align: center;
}
</style>