<template src='./tab1.html'></template>

<script>
export default {
  // 组件名，其实不写这个属性也可以
  name: 'Tab1',
  // 组件上的属性
  props: {
  },
  /**
   * 状态，必须是函数，然后返回状态，而不可以直接映射json对象
   */
  data () {
    return {
    }
  },
  /**
   * 函数
   */
  methods: {
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only ，scoped设置后为scss局部作用于 -->
<style scoped lang="scss" src='./tab1.scss'></style>
