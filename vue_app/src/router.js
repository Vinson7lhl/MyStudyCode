import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import List from './views/List.vue'
import ListDetail from './views/ListDetail.vue'
import AsyncComp from './views/asyncCompTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/list_detail/:id',
      name: 'list_detail',
      component: ListDetail
    },
    {
      path: '/asyncComp',
      name: 'async_comp',
      component: AsyncComp
    }
  ]
})
