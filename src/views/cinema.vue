<template>
  <div>
    <cinema-header></cinema-header>
    <div class="he" :style="{ height: height }">
      <ul>
        <li v-for="item in cityList" :key="item.cinemaId">
          <div style="float: left; width: 70%">
            <span>{{ item.name }}</span>
            <span class="address">{{ item.address }}</span>
          </div>
          <div class="right">￥{{ item.lowPrice / 100 }}起</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import cinemaHeader from './cinema/cinemaHeader'

import Better from 'better-scroll'
// vuex的引入
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    cinemaHeader
  },
  computed: {
    ...mapState('cityModule', ['cityId']),
    ...mapState('cinemaModule', ['cityList'])
  },
  data () {
    return {
      cinemas: [],
      height: 0
    }
  },
  methods: {
    ...mapActions('cinemaModule', ['cityLists'])
  },
  mounted () {
    // 可视窗口高度
    this.height = document.documentElement.scrollHeight - 100 + 'px'

    // 这里在vuex中定义了这个数组 如果没有数据就发送ajax请求
    if (this.cityList.length === 0) {
      // 把数据发送到actions 让actions发送请求
      this.cityLists(this.cityId).then((res) => {
        this.$nextTick(() => {
          // $nextTick全部东西更新完才开始执行
          new Better('.he', {
            // 是否需要滚动条
            scrollbar: {
              fade: true
            }
          })
        })
      })
    } else {
      console.log('请求了')
      // 状态立即更改，但是dom异步渲染
      this.$nextTick(() => {
        // $nextTick全部东西更新完才开始执行
        new Better('.he', {
          // 是否需要滚动条
          scrollbar: {
            fade: true
          }
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.he {
  position: relative;
  height: 500px;
  overflow: hidden;
  margin-top: 50px;
  li {
    overflow: hidden;
    padding: 15px;
    span {
      font-size: 15px;
      display: block;
      width: 70%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
    }

    .address {
      font-size: 12px;
      color: #797d82;
      padding-top: 8px;
    }
  }
}
.right {
  float: right;
  font-size: 14px;
  color: #ff5f16;
  width: 70px;
  text-align: right;
}
</style>
