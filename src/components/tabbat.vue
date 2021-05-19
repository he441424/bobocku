<template>
  <div>
    <nav>
      <ul>
        <router-link to="/home" tag="li" active-class="red"
          ><i class="iconfont icon-store"></i>电影</router-link
        >
        <router-link to="/cinema" tag="li" active-class="red"
          ><i class="iconfont icon-copy"></i>影院</router-link
        >
        <router-link to="/infor" tag="li" active-class="red"
          ><i class="iconfont icon-rejectedorder"></i>资讯</router-link
        >
        <router-link to="/my" tag="li" active-class="red"
          ><i class="iconfont icon-accountfilling"></i>我的</router-link
        >
      </ul>
    </nav>
  </div>
</template>
<style lang ="scss" scoped >
nav {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 25px;
  text-align: center;
  background: white;
  z-index: 999;

  ul {
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
.red {
  color: red;
}
</style>
