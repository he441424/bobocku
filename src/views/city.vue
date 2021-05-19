<template>
  <div>
    <van-index-bar :index-list="cityType" @select="handSelect">
      <div v-for="item in cityList" :key="item.cityId">
        <van-index-anchor :index="item.type" />
        <van-cell
          :title="data.name"
          v-for="(data, index) in item.city"
          :key="index"
          @click="clickBack(data.name, data.cityId)"
        />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import Vue from "vue";
import http from "@/util/http";
import { IndexBar, IndexAnchor, Cell, Toast } from "vant";
import { mapMutations } from "vuex";
Vue.use(IndexBar).use(IndexAnchor).use(Cell);
export default {
  data() {
    return {
      cityList: [
        // {
        //   type: "A",
        //   city: ["A1", "A2", "A3"],
        // },
        // {
        //   type: "B",
        //   city: ["B1", "B2", "B3"],
        // },
        // {
        //   type: "C",
        //   city: ["C1", "C2", "C3"],
        // },
        // {
        //   type: "D",
        //   city: ["D1", "D2", "D3"],
        // },
        // {
        //   type: "E",
        //   city: ["E1", "E2", "E3"],
        // },
      ],
      cityType: [],
    };
  },
  mounted() {
    http({
      url: "/gateway?k=4814912",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      // console.log(res.data.data.cities);
      // for (let i = 65; i <= 90; i++) {
      //   console.log(String.fromCharCode(i));
      // }
      // 给一个事件 在事件里面处理这些数据
      this.handCity(res.data.data.cities);
    });
  },
  methods: {
    ...mapMutations("cityModule", ["cityName", "cityId"]),
    handCity(city) {
      // console.log(city);
      // city是原始数据 把原始数据变成目标数据
      // {
      //     type: "E",
      //     city: ["E1", "E2", "E3"],
      //   },
      let lettArr = []; //A-Z的数据
      let newCitys = []; //全部数据
      // 字母A-Z 的字母Unicode 编码 十进制的数字是 65–90
      // String.fromCharCode转成字母
      for (let i = 65; i <= 90; i++) {
        lettArr.push(String.fromCharCode(i));
      }
      //然后对字母继续遍历 取出后端给的数据 把拼音第一个截取出来变成大写
      //然后对号入座
      lettArr.forEach((value) => {
        //value是字母
        let list = city.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === value
        );
        // 如果数组不为空就把他push上去
        if (list.length > 0) {
          newCitys.push({
            type: value,
            city: list,
          });
          this.cityType.push(value);
        }
      });

      this.cityList = newCitys;
    },
    handSelect(index) {
      console.log(index);
      Toast(index);
    },
    clickBack(name, id) {
      // this.$store.state.cityName = name;
      // 修改城市
      // this.$store.commit("cityName", name);
      this.cityName(name);
      // 修改id
      // this.$store.commit("cityId", id);
      this.cityId(id);

      this.$router.back();
    },
  },
};
</script>
<style scoped>
.van-toast--text {
  min-width: 2px;
  min-width: 0px;
}
</style>