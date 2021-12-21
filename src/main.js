import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

// 引入echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

// px2rem 自适应
import 'lib-flexible'

// 使用less
import less from 'less'
Vue.use(less)

import axios from '@/http/axios.js';
Vue.prototype.$axios = axios

// 私有化环境变量配置
import $config from '@/config';
Vue.prototype.config = $config

// 私有化环境变量配置
import {util} from '@/uitls/util.js';
Vue.prototype.$util = util


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')