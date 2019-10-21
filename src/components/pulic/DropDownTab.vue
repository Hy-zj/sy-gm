<template>
  <div class="tab_container">
    <div class="x">
      <router-link to="/home">
        <div class="tab_container_list">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM1RjZBQUNDNDgzMTFFN0E1OTZBQjk0RTMwNzMwMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM1RjZBQURDNDgzMTFFN0E1OTZBQjk0RTMwNzMwMDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzQ5MjQyN0M0ODMxMUU3QTU5NkFCOTRFMzA3MzAwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzQ5MjQyOEM0ODMxMUU3QTU5NkFCOTRFMzA3MzAwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PguEZ+AAAAbmSURBVHja7Jp7bFNV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"
          />
          <div class="tab_to">首页</div>
        </div>
      </router-link>
      <router-link to="/list">
        <div class="tab_container_list">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTBBREEyRjJDNDgzMTFFNzhCRTFGN0RBRDZCOUY5MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTBBREEyRjNDNDgzMTFFNzhCRTFGN0RBRDZCOUY5MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MDhDMzkyNkM0ODMxMUU3OEJFMUY3REFENkI5RjkxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MDhDMzkyN0M0ODMxMUU3OEJFMUY3REFENkI5RjkxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pju7/KsAAAtOSURBVHja7Ft7bJPX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"
          />
          <div class="tab_to">分类</div>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="tab_container_list">
          <img src="https://css.gomein.net.cn/plus/style/index/images/grass_cart.png?v=2017092001" />
          <div class="tab_to">购物车</div>
        </div>
      </router-link>
      <router-link to="/my">
        <div class="tab_container_list">
          <img src="https://gfs11.gomein.net.cn/wireless/T1.fdXBKZT1RCvBVdK_48_48.png" alt />
          <div class="tab_to" id="last">我的</div>
        </div>
      </router-link>
      <span class="z">◆</span>
      <span class="y">◆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownTab"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.tab_container {
  width: 190px;
  height: 190px;
  position: absolute;
  right: -5px;
  top: 53px;
  font-size: 12px;
  opacity: 0.9;
}

.x {
  width: 180px;
  position: relative;
  background: #fff;
  box-shadow: 0 0 10px rgb(223, 223, 223);
  border-radius: 5px;
  padding-left: 20px;
  left: 0px;
  top: 0px;
}
.tab_container_list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  cursor: pointer;
}
.tab_container_list img {
  width: 22px;
  height: 22px;
}
#last {
  border-bottom: none;
}
.tab_container_list .tab_to {
  width: 125px;
  margin-left: 15px;
  padding: 14px 0;
  font-size: 16px;
  color: #00050a;
  border-bottom: 1px solid rgb(223, 223, 223);
}
.y,
.z {
  position: absolute;
  left: 141px;
}

.y {
  color: rgb(235, 235, 235);
  font-size: 40px;
  top: -28px;
  z-index: 1;
}

.z {
  color: #fff;
  font-size: 40px;
  top: -26px;
  z-index: 3;
}
</style>