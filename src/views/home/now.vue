<template>
  <div>
    <van-list
      class="list"
      v-model="loading"
      :finished="finished"
      finished-text="到底了 别滑了"
      :immediate-check="false"
      @load="onLoad"
    >
      <van-cell
        class="cell"
        v-for="item in list"
        :key="item.filmId"
        @click="handClick(item.filmId)"
      >
        <img :src="item.poster" alt="" />
        <div class="right">
          <span style="padding: 5px">{{ item.name }}</span>
          <i>{{ item.filmType.name }}</i>
          <div style="height: 20px; color: #ccc; padding: 5px 0">
            <p v-show="item.grade == undefined ? false : true">
              观众评分：<span style="color: #ffb232">{{ item.grade }}</span>
            </p>
          </div>
          <p>导演：{{ item.actors | actors }}</p>
          <p>
            {{ item.nation }} &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;|&nbsp;
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{ item.runtime }}分钟
          </p>
        </div>
        <div class="gp" style="float: right">购票</div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
// import axios from "axios";
import http from "@/util/http"; // @ ==> src的绝对路径
import Vue from "vue";
// 引入vant的list和cell组件
import { List, Cell } from "vant";
import { mapState } from "vuex";
Vue.use(List).use(Cell);

// 过滤器
Vue.filter("actors", (actors) => {
  if (actors == undefined) {
    return "暂无导演";
  } else {
    return actors.map((item) => item.name).join(" ");
  }
});
export default {
  data() {
    return {
      list: [],
      loading: false, // 是否正在加载 防止多次触发
      finished: false, // 是否加载完成
      num: 1, // 第几页的数据
      total: 0, // 一共有多少条数据
    };
  },
  computed: {
    //展开符 ...
    ...mapState("cityModule", ["cityId"]),
  },
  methods: {
    onLoad() {
      // 1 axios请求
      // 2 合并请求回来的数据到老数据
      // 3 this.loading = false
      this.num++; // 每一个让页数加一
      /*思路 当滑动到快到底的时候触发 onload函数
       然后让第几页数据+1
       请求第n页的数据 把数据和前面请求的数据合并
       push.apply(已存的数据，当前获取的数据)
       然后把loading设置为false 加载完成
       判断是不是最后一条数据 如果是最后一条数据就不需要请求了
       finished改为true
      */
      http({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.num}&pageSize=10&type=1&k=8925715`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
        method: "get",
      }).then((res) => {
        // 合并数据
        // 这个是es6的新语法合并数据
        // this.list = [...this.list, ...res.data.data.films];
        // push.apply也是合并数据
        this.list.push.apply(this.list, res.data.data.films);
        this.loading = false; // 然后在把loading赋为false 因为加载完成了
      });
      // 判断 如果长度等于全部数据的时候就不需要加载了
      if (this.list.length === this.total && this.list.length !== 0) {
        this.finished = true;
      }
    },
    handClick(id) {
      this.$router.push(`/data/${id}`);
    },
  },
  mounted() {
    // 请求axios获取第一页的数据
    http({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=8925715`,
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
      method: "get",
    }).then((res) => {
      console.log(res.data.data.films);
      this.list = res.data.data.films;
      this.total = res.data.data.total;
      console.log(this.total);
    });
  },
};
</script>
<style lang="scss" scoped>
.list {
  .cell {
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
