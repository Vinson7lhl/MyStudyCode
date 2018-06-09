<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="HelloWorld组件msg属性值"/>
  </div>
</template>

<script>
// @ is an alias to /src，@ 是'/src'的别名
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
