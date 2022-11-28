import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes: routes,
})
new Vue({
  router: router,
  render: (h) => h(App), 
}).$mount('#app')


// ========================================


// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './routes';

// createApp(App).use(router).mount("#app");