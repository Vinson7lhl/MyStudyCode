<template src='./HelloWorld.html'></template>

<script>
import { mapState } from 'vuex'
import Tab1Comp from '../tab1/tab1.vue'
import Tab2Comp from '../tab2/tab2.vue'
// import { X } from '../../../public/lib/lhl.js'
export default {
  // 组件名，其实不写这个属性也可以
  name: 'HelloWorld',
  // 组件上的属性
  props: {
    dataMsg: String
  },
  /**
   * 状态，必须是函数，然后返回状态，而不可以直接映射json对象
   */
  data () {
    return {
      input_text: 'computed',
      html_text: '<h1>这里是h1的html代码片段</h1>',
      activeClass1: true,
      activeClass2: false,
      demo: {
        name: '洪七公',
        age: 78
      },
      gender: 'male',
      age_level: 'young',
      students: [
        {
          name: '张三',
          age: 12
        },
        {
          name: '李四',
          age: 12
        }
      ],
      tecSuperStar: [],
      phoneName: '',
      somePhoneName: [],
      rootDataName: '',
      current_tab_name: 'tab1-comp'
    }
  },
  /**
   * 函数
   */
  methods: {
    newMessageByMethod (str) {
      return `${this.msg}-${str}`
    },
    changeDemo () {
      this.demo.name = '老顽童'
    },
    add () {
      console.log('增加')
      this.$store.commit('add', '这里是add的载入数据')
    },
    minus () {
      console.log('减少')
      this.$store.commit('minus', '这里是minus的载入数据')
    },
    triggerBo () {
      console.log('广播')
      this.$emit('test', '广播收到')
    },
    // 修改数组：变异，非变异
    changeArray () {
      // this.students[0] = {name:'李宏磊',age:30};  直接修改某个索引的数据是无法改变view的！
      // this.students = [{name:'李宏磊',age:30},{name:'李宏磊2',age:32}]; 可以改变
      this.students[0].age = 30 // 可以改变
    },
    // 获取root组件数据
    getRootData () {
      console.log(this.$root)
      this.rootDataName = this.$root.rootData
    },
    // 触发子组件中的获取焦点事件
    beFocused () {
      this.$refs.focusInput.focus()
    },
    switchTab (str) {
      this.current_tab_name = str
    }
  },
  /**
   * 重新定义数据，computed的本质就是angular的管道
   */
  computed: {
    newMessageByComputed () {
      return this.input_text + '-新数据'
    },
    /**
     * from the Vuex 'store',来自Vuex中的状态一般会放在computed中，因为state和上面的data（本质也是state）是响应式的
     */
    // 第一种写法：只有一个状态
    from_store_count () {
      // 通过this.$store来获取Vuex的Store 对象
      return this.$store.state.count
    },
    // 第二种通过Vuex的mapState函数处理多个state
    ...mapState({
      // 箭头函数
      state_1: state => state.state1,
      // 直接传递状态字符串
      state_2: 'state2',
      // 如果要使用this就必须用一般函数，如第一种写法
      state_3 (state) {
        return this.demo.name + '-连接另一个字符串-' + state.state3
      }
    })
  },
  components: {
    'tab1-comp': Tab1Comp,
    'tab2-comp': Tab2Comp
  },
  /**
   * 生命周期钩子:created，注意不要用箭头函数！否则this无法绑定在vue实例上
   */
  beforeCreate () {
    console.log('生命周期钩子：beforeCreated')
    console.log('周期函数中调用input_text:' + this.input_text) // undefined
  },
  created () {
    console.log('生命周期钩子：created')
    console.log('周期函数中调用input_text:' + this.input_text)
    console.log('子组件访问Home页面数据：', this.$parent.homeData)
  },
  beforeMount () {
    console.log('生命周期钩子：beforeMount')
  },
  mounted () {
    console.log('/------------HelloWord-加载完毕-------------/')
    console.log('子组件访问根组件数据：', this.$root.isShowPopUp)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only ，scoped设置后为scss局部作用于 -->
<style scoped lang="scss" src='./HelloWorld.scss'></style>
