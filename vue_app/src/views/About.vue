<template>
  <div class="about">
    <h1 @click='changeConent'>This is an about page</h1>
    <div>
      {{content}}<br>
      <img src="../assets/async.jpg" alt="">
      <div class='tabList'>
        <router-link class='aboutTab' to="/about/us">关于我们</router-link>
        <router-link class='aboutTab' to="/about/firm">关于公司</router-link>
      </div>
      <transition name="fade">
        <!--路由的输出-->
        <div class='childrenRoute'><router-view/></div>
      </transition>
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

<style lang="scss" scoped>
.tabList{
  overflow: hidden;
  width:200px;
  margin-left:auto;
  margin-right:auto;
  margin-top:100px;
  .aboutTab{
    float:left;
    width:100px;
    text-align: center;
    line-height: 50px;
    background-color: #4e4e4e;
    color:#ffffff;
    transition:all 0.3s;
    text-decoration: none;
  }
  .aboutTab:hover{
    background-color: #000000;
  }
}
.childrenRoute{
    text-align: center;
    font-weight:bold;
    margin-top:50px;
  }
</style>
