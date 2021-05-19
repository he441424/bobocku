const module = {
  namespaced: true, // 命名空间

  state: {
    cityName: '惠州',
    cityId: '441300'
  },
  mutations: {
    cityName (state, name) {
      state.cityName = name
    },
    cityId (state, id) {
      state.cityId = id
    }
  },
  actions: {

  }

}
export default module
