const module = {
  namespaced: true, // 命名空间

  state: {
    isShow: true

  },
  mutations: {
    hide (state, hid) {
      state.isShow = hid
    },
    show (state, sho) {
      state.isShow = sho
    }
  },
  actions: {

  }

}
export default module
