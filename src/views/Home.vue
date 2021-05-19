<template>
  <div>
    <home-swiper>
      <div class="swiper-slide" v-for="item in imgList" :key="item.id">
        <div
          :style="{ backgroundImage: 'url(' + item + ')' }"
          style="
            height: 200px;
            background-size: cover;
            background-position: center;
          "
        ></div>
      </div>
    </home-swiper>
    <!-- <home-header style="position: sticky; top: 0px"></home-header> -->
    <home-header></home-header>
  </div>
</template>

<script>
// 即将上映和正在热映
import homeHeader from "./home/homeHeader";
// 轮播图
import homeSwiper from "./home/homeSwiper";
export default {
  components: { homeHeader, homeSwiper },
  data() {
    return {
      imgList: [
        "https://pic.maizuo.com/usr/movie/637447e2e85b1efebbc53bc05098d363.jpg?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/ade14e02d2887a54dc32de6a0fa570ad.jpg?x-oss-process=image/quality,Q_70",
        "https://pic.maizuo.com/usr/movie/c972f69c5bd222c915bcd85fec2b7975.jpg?x-oss-process=image/quality,Q_70",
      ],
    };
  },
};
</script>

<style lang ="scss" scoped >
.lbt {
  width: 100%;
  height: 250px;
  background: #ccc;
}
</style>
