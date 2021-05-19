<template>
  <div>
    <form action="/" class="search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @cancel="onCancel"
      />
      <!-- @search="onSearch" -->
      <!-- @cancel="onCancel" -->
    </form>
    <div class="he">
      <ul>
        <li v-for="item in computedList" :key="item.cinemaId">
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
import { Search } from "vant";
import Vue from "vue";
import { mapMutations, mapState, mapActions } from "vuex";
Vue.use(Search);
export default {
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    //   进去隐藏导航栏
    this.hide(false);
    // 可视窗口高度
    this.height = document.documentElement.scrollHeight - 100 + "px";
    // 这里在vuex中定义了这个数组 如果没有数据就发送ajax请求
    if (this.cityList.length === 0) {
      // 把数据发送到actions 让actions发送请求
      this.cityLists(this.cityId);
    } else {
      console.log("请求了");
    }
  },
  beforeDestroy() {
    this.show(true);
  },
  computed: {
    ...mapState("cinemaModule", ["cityList"]),
    computedList() {
      if (this.value === "") return [];
      //   return this.$store.state.cityList;过滤传过来的数据进行模糊搜索
      return this.cityList.filter(
        (item) =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
        //   includes检查数组是否包含
      );
    },
  },
  methods: {
    ...mapActions("cinemaModule", ["cityLists"]),
    ...mapMutations("tabBatModule", ["hide", "show"]),
    ...mapMutations("cityModule", ["cityId"]),
    onCancel() {
      // push 跳转 会一直保存记录
      // back退回来
      // replace会替换
      this.$router.replace("/cinema");
    },
  },
};
</script>
<style lang="scss" scoped>
.he {
  margin-top: 50px;

  position: relative;
  //   height: 500px;
  overflow: hidden;
  //   margin-top: 50px;
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
.search {
  height: 50px;
  width: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
}
</style>
