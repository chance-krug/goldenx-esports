import App from './App.vue'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
