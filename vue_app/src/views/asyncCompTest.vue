<template>
  <div class="about">
    <h1>异步组件页面</h1>
    <async-comp></async-comp>
  </div>
</template>

<script>
export default {
  name: 'about-page',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    'async-comp': () => import('@/components/asyncComp/async.vue')
  }
}
</script>
