// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/font_kpppwqlg7d/iconfont.css'
import './assets/font_o82dfis1e6/iconfont.css'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
var clwidth=document.body.clientWidth||document.documentElement.clientWidth;
var htmldom=document.getElementsByTagName('html')[0];
htmldom.style.fontSize=Math.ceil(clwidth*0.13)+'px';
import store from'@/store/store.js'
let Base64 = require('js-base64').Base64;
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Lyric from 'lyric-parser'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
// Vue.filter('shi',function(add){
//   return add.toFixed(2)
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
