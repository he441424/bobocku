<template>
  <div v-if="homeData" style="background: #f4f4f4">
    <back-home></back-home>
    <data-header v-top :name="homeData.name"></data-header>
    <div
      :style="{ backgroundImage: 'url(' + homeData.poster + ')' }"
      style="height: 200px; background-size: cover; background-position: center"
    ></div>
    <div class="nr">
      <div>
        <h2>{{ homeData.name }}</h2>

        <i>{{ homeData.item.name }}</i>
        <em style="float: right; color: #ffb232">{{ homeData.grade }}分</em>
      </div>
      <div>
        <span>{{ homeData.category }}</span>
      </div>
      <div>
        <span>{{ homeData.premiereAt | dataTime }} 上映</span>
      </div>
      <div>
        <span>{{ homeData.nation }} | {{ homeData.runtime }}分钟</span>
      </div>
      <div :class="isShow ? '' : 'synopsis'" style="padding-top: 15px">
        <span> {{ homeData.synopsis }}</span>
      </div>
      <div style="text-align: center">
        <p
          class="iconfont"
          :class="isShow ? 'icon-less' : 'icon-moreunfold'"
          style="font-size: 18px"
          @click="isShow = !isShow"
        ></p>
      </div>
    </div>
    <div class="actors">
      <h2>演职人员</h2>

      <swiper-actors
        :perslide="4"
        swiperclass="swiper-actor"
        style="padding-top: 10px"
      >
        <div
          class="swiper-slide"
          v-for="data in homeData.actors"
          :key="data.id"
        >
          <img :src="data.avatarAddress" alt="" width="85px" height="117px" />
          <div style="text-align: center">
            <div class="actorname">
              {{ data.name }}
            </div>
            <span style="padding: 6px; font-size: 11px">{{ data.role }}</span>
          </div>
        </div>
      </swiper-actors>
    </div>
    <!-- phones -->
    <div class="actors">
      <h2>剧照</h2>
      <!-- perslide是给子传一个页面显示几张照片的值
        因为用了两次这个组件 组件不知道那个先加载数据 不知道把数据传给哪一个
        所以我们在给他传一个class
      -->
      <swiper-actors
        :perslide="2"
        swiperclass="swiper-phones"
        style="padding-top: 10px"
      >
        <div
          class="swiper-slide"
          v-for="(data, index) in homeData.photos"
          :key="data.id"
        >
          <img
            :src="data"
            alt=""
            width="180px"
            height="100px"
            @click="handPhones(index)"
          />
        </div>
      </swiper-actors>
    </div>
  </div>
</template>
<script>
import http from "@/util/http";
import Vue from "vue";
// 轮播图
import swiperActors from "./data/swiperActors";
// 这个是计算时间的插件
import moment from "moment";
// 返回主页面
import backHome from "../components/backHome";
// 头部
import dataHeader from "./data/dataHeader";
// 引入vant
import { ImagePreview, Toast } from "vant";
import { mapMutations } from "vuex";
// 过滤器
Vue.filter("dataTime", (dataTime) => {
  return moment(dataTime * 1000).format(" YYYY-MM-DD");
});

// 自定义指令
Vue.directive("top", {
  inserted(el) {
    // console.log(el);
    el.style.display = "none";
    window.onscroll = () => {
      // console.log(11);
      // console.log(document.documentElement.scrollTop);
      // 判断如果滑动的高度大于50的话就把el(组件本身)给显示否则隐藏
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) > 50
      ) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  // 当前页面退出的时候就把onscroll事件给清掉
  unbind() {
    window.onscroll = null;
  },
});

export default {
  components: {
    swiperActors,
    backHome,
    dataHeader,
  },

  data() {
    return {
      homeData: null, //初始值先给他应该空 等数据请求回来再进行渲染就不会报错
      isShow: false, //显示隐藏tab组件
    };
  },
  methods: {
    ...mapMutations("tabBatModule", ["hide", "show"]),
    handPhones(index) {
      // console.log(index);
      ImagePreview({
        images: this.homeData.photos,
        loop: false, // 不无限轮播
        startPosition: index, // 点击显示第几张
        closeable: true, // 显示关闭按钮
        closeIconPosition: " top-left", // 关闭按钮的位置
      });
    },
  },

  mounted() {
    // 进去隐藏tabbat
    // this.$store.commit("hide", false);
    this.hide(false);
    // Toast.loading({
    //   message: "加载中...",
    //   forbidClick: true, //禁止点击背景
    //   overlay: true, //背景遮罩层
    //   duration: 0, //展示时间 在请求完axios关闭这个提示 Toast.clear()
    // });
    // console.log(this.$route.params.myid);
    http({
      url: `/gateway?filmId=${this.$route.params.myid}&k=7660086`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      // console.log(res.data.data.film);
      this.homeData = res.data.data.film;
      Toast.clear(); // 关闭加载中的展示
    });
  },
  // 销毁前就把他显示
  beforeDestroy() {
    // this.$store.commit("show", true);
    this.show(true);
  },
};
</script>
<style lang="scss" scoped>
.nr {
  padding: 10px;
  background: white;
}
span {
  color: #797d82;
  font-size: 13px;
  padding-top: 6px;
}
.actors {
  background: white;
  margin-top: 15px;
  padding: 10px;
}
h2 {
  font-weight: 400;
  display: inline;
  font-size: 17px;
}
i {
  font-size: 12px;
  background: #d2d6dc;
  color: #fff;
  height: 14px;
  line-height: 14px;
  margin-left: 5px;
}
.synopsis {
  height: 50px;
  overflow: hidden;
  transform: height 0.5;
}
.actorname {
  font-size: 12px;
  overflow: hidden;
  width: 100%;
  height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
