// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//配置mintui
import MintUI from 'mint-ui'
//引入css
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
//引入自制组件
import theLi from '@/components/theLi'
import theUi from  '@/components/theUl'
//注册全局组件
Vue.component(theLi.name,theLi)
Vue.component(theUi.name,theUi)

Vue.use(MintUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

