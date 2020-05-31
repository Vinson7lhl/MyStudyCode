<template>
  <div class="about">
    <h1 @click='changeConent'>This is an about page</h1>
    <div>
      {{content}}
      <img src="../assets/async.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-page',
  data () {
    return {
      content: ['你好', '啊——', '李银河']
    }
  },
  methods: {
    changeConent () {
      // this.content[2] = '王小波'
      this.$set(this.content, 2, '王小波')
    }
  }
}
</script>
