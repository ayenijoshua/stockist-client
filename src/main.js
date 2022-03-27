import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue';
import store from './store'
// import Chartkick from 'vue-chartkick'
// import {Chart} from 'chart.js'

//Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(store)

export default new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#main')
