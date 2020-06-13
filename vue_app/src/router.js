import Vue from 'vue'
import Router from 'vue-router'
// 页面级别
import Home from './views/Home.vue'
import About from './views/About.vue'
import List from './views/List.vue'
import ListDetail from './views/ListDetail.vue'
import NotFoundPage from './views/NotFound.vue'
// 组件级别
import AsyncComp from './views/asyncCompTest.vue'
import AboutUs from './components/aboutUs/about_us.vue'
import AboutFirm from './components/aboutFirm/about_firm.vue'

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
      component: About,
      children: [
        {
          path: 'us',
          name: 'about_us',
          component: AboutUs
        },
        {
          path: 'firm',
          name: 'about_firm',
          component: AboutFirm
        }
      ]
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
    },
    {
      path: '*',
      name: 'not_found_page',
      component: NotFoundPage
    }
  ]
})
