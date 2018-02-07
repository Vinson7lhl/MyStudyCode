<template>
  <div>
    <ul>
      <li v-for="hero of heros">
        {{hero}}
      </li>
      来自父亲的数据：{{fromFather}}
    </ul>
  </div> 
</template>

<script>
/**
 * name的作用：1、有名字的组件便于调试；2、递归有用
 */
export default {
  name: 'hero-component',
  props:["fromFather"],
  data () {
    return {
      heros: ["东邪","西毒","南帝","北丐"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
