<template>
  <div>
    <ul>
      <li style="text-align: left; margin-left: 10px" @click="handCity">
        {{ cityName }}
      </li>
      <li>影院</li>
      <li style="text-align: right; margin-right: 10px" @click="search">
        <i class="iconfont icon-search" style="font-size: 20px"></i>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('cityModule', ['cityName'])
  },
  methods: {
    ...mapMutations('cinemaModule', ['CityList']),
    handCity () {
      this.$router.push('/city')
      this.CityList()
      // this.$store.state.cityList();
    },
    search () {
      this.$router.push('/cinema/search')
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  z-index: 99;
  li {
    flex: 1;
    text-align: center;
    display: inline-block;
  }
}
</style>
