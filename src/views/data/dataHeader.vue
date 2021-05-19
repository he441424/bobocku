<template>
  <div>{{ name }}</div>
</template>
<script>
export default { props: ['name'] }
</script>
<style lang="scss" scoped>
div {
  height: 45px;
  width: 100%;
  line-height: 45px;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  text-align: center;
}
</style>
