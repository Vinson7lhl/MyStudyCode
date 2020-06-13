<template>
  <div class="notFoundPage">
    <div class='notFoundText'>{{content}}</div>
    <img src="../assets/404.jpg" alt />
  </div>
</template>

<script>
export default {
  name: 'about-page',
  data () {
    return {
      content: '404未找到'
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.notFoundPage {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  .notFoundText{
    margin-bottom:100px;
  }
}
</style>
