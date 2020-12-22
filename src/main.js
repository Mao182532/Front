import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const axiosConfig = {
  baseURL: "http:...url de la base de datos",
  timecut: 30000,
};
Vue.prototype.$axios = axios.create(axiosConfig)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')