import Vue from 'vue'
import Vuex from 'vuex'
// 引入每一个模块
import cinemaModule from './module/cinemaModule'
import cityModule from './module/cityModule'
import tabBatModule from './module/tabBatModule'

// 持久化
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
// store只存储到内存中一刷新就会把垃圾回收机制回收
export default new Vuex.Store({
  plugins: [createPersistedState()],
  // 共享的状态
  state: {
    // cityName: "惠州",
    // cityId: "441300",
    // isShow: true,
    // cityList:[],
  },
  // 集中式修改状态 可以进行监控
  // 通过this.$store.commit("事件名"，修改的值)传到mutations
  // mutations遍历 如果有这个就给他更新
  // 页面访问通过 $store.state.要访问那个状态
  mutations: {
    // cityName(state, name) {
    //   state.cityName =name
    // },
    // cityId(state, id) {
    //   state.cityId=id
    // },
    // hide(state,hid) {
    //   state.isShow=hid
    // },
    // show(state, sho) {
    //   state.isShow = sho
    // },
    // citysList(state,data) {
    //   state.cityList = data
    // }
  },
  // actions是异步请求
  actions: {
  //   cityList(store, cityId) {
  //     // return 让dispatch接收 .then
  //     return http({
  //       url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8340757`,
  //       headers: {
  //         "X-Host": "mall.film-ticket.cinema.list",
  //       },
  //     }).then((res) => {
  //       // console.log(res.data.data.cinemas);
  //         // res.data.data.cinemas;
  //       // 提交到mutations中
  //        store.commit("citysList",res.data.data.cinemas)

  //     });
  //  }
  },
  // 组装每一个模块
  modules: {
    cinemaModule,
    cityModule,
    tabBatModule
  }
})
