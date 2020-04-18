<template>
    <div>
        <div v-for='item of products' :key='item.id' >
            <router-link :to='"/list_detail/" + item.id'>{{item.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: '产品列表',
  data () {
    return {
      products: [
        { id: 1, name: '苹果' },
        { id: 2, name: '鸭梨' },
        { id: 3, name: '橘子' }
      ]
    }
  }
}
</script>
