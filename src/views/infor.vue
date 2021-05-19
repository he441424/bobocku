<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <div class="img"><img :src="item.images[1].url" alt="" /></div>
        <div class="p">
          {{ item.title }}
        </div>
        <div class="bottom">
          <van-icon
            name="eye-o"
            size="1.5rem"
            style="vertical-align: middle; margin: 0 5px"
          />{{ item.viewCount }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import { Icon } from "vant";
import Vue from "vue";
Vue.use(Icon);
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios
      .get(
        "/sns/group/1481351/contents.json?_v_=yes&offset=10&timestamp=1618758399724"
      )
      .then((res) => {
        console.log(res.data.data);
        this.data = res.data.data;
      });
  },
};
</script>
<style scoped lang="scss">
li {
  overflow: hidden;
  padding: 10px;
  // width: 100%;

  .p {
    color: #222;
    font-size: 16px;
  }
  .bottom {
    height: 30px;
    line-height: 30px;
  }
}
.img {
  float: left;
  margin-right: 10px;
  img {
    width: 120px;
    height: 100px;
  }
}
</style>
