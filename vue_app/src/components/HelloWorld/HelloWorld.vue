<template src='./HelloWorld.html'></template>










<script>
import { mapState } from 'vuex'
/**
 * export default 好处就是导入时可其任意的名字：语法源自es6
 */
export default {
  // 组件名，其实不写这个属性也可以
  name: "HelloWorld",
  // 组件上的属性
  props: {
    'dataMsg': String
  },
  /**
   * 状态，必须是函数，然后返回状态，而不可以直接映射json对象
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
        gender:'male',
        age_level:'young',
        students:[
        {
          name:'张三',
          age:12
        },
        {
          name:'李四',
          age:12
        }],
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
    },
    add(){
      console.log('增加');
      this.$store.commit('add','这里是add的载入数据');
    },
    minus(){
      console.log('减少');
      this.$store.commit('minus','这里是minus的载入数据');
    },
    triggerBo(){
      console.log('广播');
      this.$emit('test','广播受到');
    }
  },
  /**
   * 重新定义数据，computed的本质就是angular的管道
   */
  computed:{
    newMessageByComputed:function(){
      return this.input_text+'-新数据';
    },
    /**
     * from the Vuex 'store',来自Vuex中的状态一般会放在computed中，因为state和上面的data（本质也是state）是响应式的
     */
    // 第一种写法：只有一个状态
    from_store_count(){
      // 通过this.$store来获取Vuex的Store 对象
      return this.$store.state.count;
    },
    // 第二种通过Vuex的mapState函数处理多个state
    ...mapState({
      // 箭头函数
      'state_1':state=>state.state1,
      // 直接传递状态字符串
      'state_2':'state2',
      // 如果要使用this就必须用一般函数，如第一种写法
      state_3(state){
        return this.demo.name+'-连接另一个字符串-'+state.state3;
      }
    }),
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
