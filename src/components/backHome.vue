<template>
  <router-link to="/home/now" tag="div">
    <div class="return">
      <i class="iconfont icon-back"></i>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
.return {
  height: 30px;
  width: 30px;

  background: rgba(#fff, 0.7);
  border-radius: 50%;
  text-align: center;
  position: fixed;
  top: 5px;
  left: 5px;
  z-index: 999;
}
i {
  text-align: center;
  font-size: 28px;
}
</style>
