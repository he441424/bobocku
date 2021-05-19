<template>
  <div>
    <ul style="position: sticky; top: 0px; background: white; z-index: 100">
      <!-- router-link to是跳转到哪一个页面 -->
      <router-link tag="li" to="/home/now" active-class="active"
        >正在热映</router-link
      >
      <router-link tag="li" to="/home/coming" active-class="active"
        >即将上映</router-link
      >
    </ul>
    <!-- 显示列表内容 -->
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;

  text-align: center;
  padding-top: 10px;
  height: 40px;
  line-height: 40px;
  .active {
    color: red;
    border-bottom: 3px solid red;
  }
  li {
    flex: 1;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
