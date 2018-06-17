<template>
  <div class="home">
    <img src="../assets/logo.png">
    <hello-world @emit-father='fatherEmit' data-msg="HelloWorld组件msg属性值"/>
  </div>
</template>

<script>
// @ is an alias to /src，@ 是'/src'的别名
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'

export default {
  name: 'home',
  methods:{
    fatherEmit:function(data1,data2,data3){
      console.log('来自子组建的数据1：'+data1);
      console.log('来自子组建的数据2：'+data2);
      console.log(data3.target);
    },
  },
  components: {
    'hello-world':HelloWorld
    // 或者只写HelloWorld也可以相当于-HelloWorld:HelloWorld
  }
}
</script>
