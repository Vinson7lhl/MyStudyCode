import Vue from 'vue'
import App from './App'
import flyRequset from './service/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.fly = flyRequset
const app = new Vue(App)
app.$mount()
