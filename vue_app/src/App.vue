<template>
  <div id="app1">
    root数据：{{rootData}}
    <div id="nav">
      <router-link to="/">Home</router-link><br/>
      <router-link to="/about">About</router-link><br/>
      <router-link to="/list">List</router-link>
      <router-link to="/asyncComp">AsyncPage</router-link>
    </div>
    <div v-if='isShowPopUp' class='popUp'>这里是弹窗</div>
    <!--一级路由动画切换配置-->
    <transition name="fade"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"

      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
      >
      <!--路由的输出-->
      <router-view/>
    </transition>
  </div>
</template>
<script lang="ts">
export default {
  name: 'rootApp',
  mounted () {
    console.log('/------------app-加载完毕-------------/')
    this.$on('test', data => {
      console.log('广播得到的数据')
      console.log(data)
    })
  },
  data () {
    return {
      isShowPopUp: false,
      rootData: 'root-data-洪七公'
    }
  },
  methods: {
    /**
     * 动画生命周期，打印结果
     *  before-enter App.vue:35
        before-leave App.vue:47
        leave App.vue:53
        after-leave App.vue:57
        enter App.vue:38
        after-enter
     */
    beforeEnter () {
      console.log('before-enter')
    },
    enter () {
      console.log('enter')
    },
    afterEnter () {
      console.log('after-enter')
    },
    enterCancelled (el) {
      console.log('after-cancel')
    },
    beforeLeave (el) {
      console.log('before-leave')
    },
    // 此回调函数是可选项的设置
    // 与 CSS 结合时使用
    leave (el, done) {
      // ...
      console.log('leave')
      done()
    },
    afterLeave (el) {
      console.log('after-leave')
    },
    // leaveCancelled 只用于 v-show 中
    leaveCancelled (el) {
      console.log('leave-cancel')
    }
  }
}
</script>
<style lang="scss">
// .popUp{
//   display: none;
// }
//  公共样式文件
$base_color: red;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.baseClass {
  font-weight: bold;
  font-size: 20px;
  color: $base_color;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(10px, 0px);
}
.fade-leave,
.fade-enter-to {
  opacity: 1;
  transform: translate(0px, 0px);
}
</style>
