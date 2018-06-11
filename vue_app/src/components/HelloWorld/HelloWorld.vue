<template src='./HelloWorld.html'></template>










<script>
export default {
  // 组件名
  name: "HelloWorld",
  // 组件上的属性
  props: {
    msg: String
  },
  /**
   * 状态
   */
  data: function(){
    return {
        input_text:'computed',
        html_text:'<h1>这里是h1的html代码片段</h1>',
        activeClass1:true,
        activeClass2:false,
        demo:{
          name:'洪七公',
          age:78
        },
      }
  },
  /**
   * 函数
   */
  methods: {
    newMessageByMethod:function(str){
      return `${this.msg}-${str}`;
    },
    changeDemo:function(){
      this.demo.name='老顽童';
    }
  },
  /**
   * 重新定义数据，computed的本质就是angular的管道
   */
  computed:{
    newMessageByComputed:function(){
      return this.input_text+'-新数据';
    },
  },
  components:{
    
  },
  /**
   * 生命周期钩子:created，注意不要用箭头函数！否则this无法绑定在vue实例上
   */
  beforeCreate:function(){
    console.log('生命周期钩子：beforeCreated');
    console.log('周期函数中调用input_text:'+this.input_text);// undefined
  },
  created:function(){
    console.log('生命周期钩子：created');
    console.log('周期函数中调用input_text:'+this.input_text);
  },
  beforeMount:function(){
    console.log('生命周期钩子：beforeMount');
  }
};
</script>













<!-- Add "scoped" attribute to limit CSS to this component only ，scoped设置后为scss局部作用于 -->
<style scoped lang="scss" src='./HelloWorld.scss'></style>
