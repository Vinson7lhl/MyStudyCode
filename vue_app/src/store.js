import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 创建一个根Store对象，也是唯一的
 * 用法：this.$store.state.count
 */
export default new Vuex.Store({
  /**
   * -------------------------- 状态集合 -----------------------------
   * 用法 this.$store.state.count
   */
  state: {
    count: 1,
    state1: 2,
    state2: 3,
    state3: 4,
    login_name: '小李子',
    login_number: '13888877671'
  },
  /**
   * -------------------------- getter -----------------------------
   * 相当于state的computed计算
   * 用法：this.$store.getter.login_message
   */
  getters: {
    login_message: state => {
      return `登陆者名字为：${state.login_name}，手机号码为：${state.login_number}`
    }
  },
  /**
   * -------------------------- mutation -----------------------------
   * 同步处理状态
   * this.$store.commit('函数名')
   */
  mutations: {
    add: (state, data) => state.count++,
    minus: (state, data) => state.count--
  },
  actions: {

  }
})
