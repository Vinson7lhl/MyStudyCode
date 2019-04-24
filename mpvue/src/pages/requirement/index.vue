<!--
	发需求页
-->
<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <div @click='jumpToIndex'>跳转到首页</div>
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import store from '../../store/store'
import api from '../../service/index'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    jumpToIndex () {
      wx.switchTab({
        url: 'pages/index/main'
      })
    }
  },
  created () {
    console.log('Vue钩子函数：page-counter-created')
  },
  mounted () {
    console.log('Vue钩子函数：page-counter-mounted')
  },
  onShow () {
    console.log('wx钩子函数：page-counter-onShow')
    console.log(`接口名：${api.test1}`)
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
