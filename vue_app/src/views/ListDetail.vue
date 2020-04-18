<template>
  <div>
    产品Id：{{p_detail.id}}
    产品名：{{p_detail.name}}
  </div>
</template>

<script>
/**
 * 路由参数：this.$route.params.id => /detail/:id
 */
export default {
  name: 'product_detail',
  data () {
    return {
      products: [
        { id: 1, name: '苹果' },
        { id: 2, name: '橘子' },
        { id: 3, name: '橘子' }
      ],
      p_detail: ''
    }
  },
  mounted () {
    this.products.map(item => {
      if (item.id === parseInt(this.$route.params.id)) {
        this.p_detail = item
      }
    })
  }
}
</script>
