<template>
  <div>
    <div class="bj">
      <div class="header">
        <van-icon
          name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
          size="4rem"
        />
        <a href="">立即登录</a>
      </div>
    </div>
    <!-- nav -->
    <div class="nav">
      <ul>
        <li>电影订单</li>
        <li>商品订单</li>
      </ul>
    </div>
    <!-- content -->
    <div class="content">
      <ul>
        <li v-for="item in list" :key="item.id">
          <van-icon :name="item.icon" size="1.5rem" :color="item.color" />
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import Vue from "vue";
Vue.use(Icon);
export default {
  data() {
    return {
      list: [
        {
          color: "#ff8462",
          title: "卖座卷",
          icon: "idcard",
        },
        {
          color: "#baa27a",

          title: "组合红包",
          icon: "bill-o",
        },
        { title: "余额", icon: "after-sale", color: "#ffb333" },
        { title: "设置", icon: "setting-o", color: "#bfd060" },
      ],
    };
  },
};
</script>
<style scoped lang ="scss">
body {
  background: red;
  overflow: hidden;
}
.bj {
  height: 150px;
  overflow: hidden;
  /* padding-right: 5px */
  width: 100%;
  background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png);
  background-size: cover;
  position: relative;
}
.header {
  position: absolute;
  top: 50%;
}
.nav {
  /* display: flex; */
  /* width: 100%; */
  height: 50px;
  line-height: 50px;
  ul {
    display: flex;

    li {
      flex: 1;
      text-align: center;
    }
  }
}
.content {
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  height: 200px;
  ul {
    height: 100%;
    li {
      height: 50px;
      line-height: 50px;
    }
  }
}
.van-icon {
  vertical-align: middle;
  margin: 0 5px;
}
</style>
