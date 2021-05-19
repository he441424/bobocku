<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <slot></slot>
        <!-- 分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle' // 引入swiper.js
import 'swiper/swiper-bundle.min.css' // 引入swiper.css

export default {
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 2000, // 自动切换的时间间隔，单位ms
        disableOnInteraction: false // 用户操作swiper之后，是否禁止autoplay
      }
      // 分页器
      // pagination: {
      //   el: ".swiper-pagination",
      // },
    })
  }
}
</script>
