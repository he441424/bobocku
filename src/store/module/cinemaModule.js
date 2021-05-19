import http from '@/util/http'

const module = {
  namespaced: true, // 命名空间
  state: {
    cityList: []
  },
  mutations: {
    citysList (state, data) {
      state.cityList = data
    },
    CityList (state) {
      state.cityList = []
    }
  },
  actions: {
    cityLists (store, cityId) {
      // return 让dispatch接收 .then
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8340757`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        // console.log(res.data.data.cinemas);
        // res.data.data.cinemas;
        // 提交到mutations中
        store.commit('citysList', res.data.data.cinemas)
      })
    }
  }

}
export default module
