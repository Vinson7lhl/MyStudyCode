import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 创建一个根Store对象，也是唯一的
 */
export default new Vuex.Store({
  // 这里装着所有的状态（非异步）
  state: {
    count: 1,
    state1:2,
    state2:3,
    state3:4,
  },
  // 所有的触发函数===>从而改变状态，通过提交mutation：this.$store.commit('函数名')来触发，从而改变state
  mutations: {
    add: (state,data) => state.count++,
    minus: (state,data) => state.count--
  },
  actions: {

  }
})
