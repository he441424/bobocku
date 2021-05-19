<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item.filmId"
        @click="handClick(item.filmId)"
      >
        <img :src="item.poster" alt="" />
        <div class="right">
          <span style="padding: 5px">{{ item.name }}</span>
          <i>{{ item.filmType.name }}</i>

          <p>导演：{{ item.actors | actors }}</p>
          <p>上映时间{{ item.premiereAt | comingTime }}</p>
        </div>
        <div class="gp" style="float: right">预定</div>
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from "axios";
import http from '@/util/http' // @ ==> src的绝对路径
import Vue from 'vue'
import moment from 'moment'
import { mapState } from 'vuex'

// 过滤器
Vue.filter('actors', (actors) => {
  if (actors == undefined) {
    return '暂无导演'
  } else {
    return actors.map((item) => item.name).join(' ')
  }
})
Vue.filter('comingTime', (comingTime) => {
  return moment(comingTime * 1000).format('  YYYY年 MM月DD日')
  // return moment(dataTime * 1000).format(" YYYY-MM-DD");
})
export default {
  data () {
    return {
      list: [],
      seed: false
    }
  },
  computed: {
    ...mapState('cityModule', ['cityId'])
  },
  methods: {
    handClick (id) {
      this.$router.push(`/data/${id}`)
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=100&type=2&k=653744`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      },
      method: 'get'
    }).then((res) => {
      console.log(res.data.data.films)
      this.list = res.data.data.films
    })
  }
}
</script>
<style lang="scss" scoped>
ul {
  li {
    overflow: hidden;
    position: relative;
    img {
      width: 90px;
      height: 130px;
      padding: 10px;
      padding-right: 0;
      float: left;
    }
  }
}
.right {
  font-size: 13px;

  float: left;
  padding-top: 15px;
  position: relative;
  width: calc(100% - 116px);

  text-overflow: ellipsis;
  i {
    font-size: 12px;
    background: #d2d6dc;
    color: #fff;
    height: 14px;
    line-height: 14px;
    margin-left: 5px;
  }
  p {
    color: #797d82;
    overflow: hidden;
    padding: 5px;
    text-overflow: ellipsis;
    width: calc(100% - 46px);
    white-space: nowrap;
  }
}
.gp {
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border: 1px solid #ff5f16;
  color: #ff5f16;
  position: absolute;
  top: 43%;
  right: 10px;
  font-size: 12px;
}
.active {
  background: #ff5f16;
  color: white;
}
</style>
