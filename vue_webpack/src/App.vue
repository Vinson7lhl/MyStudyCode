<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <router-view/>
    <Hero :from-father="faterVar"></Hero>
    <router-link to="/heros">跳转</router-link>
  </div>
  
</template>

<script>
import Hero from './components/Hero'
export default {
  name: 'app',
  data(){
    return {
      faterVar:"这是来自父级的数据hell"
    }
  },
  components:{
    Hero
  }
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
