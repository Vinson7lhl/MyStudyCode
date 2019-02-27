<template>
  <!--
    1、路由（参数）
    2、异步请求封装
    3、状态存储
    4、公共组件封装
    5、公共样式
    6、第三方UI导入
  -->
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt_test
      </h1>
      <h2 class="subtitle">
        the first nuxt project for lihonglei
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
    <ul>
      <li><nuxt-link to="/about">关于我们</nuxt-link></li>
      <li><nuxt-link to="/productList">产品列表</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
