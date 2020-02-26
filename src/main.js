import App from './App.vue'
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

Vue.config.productionTip = false;
new Vue({
  vuetify,
  Tweet,
  Moment,
  Timeline,
  render: h => h(App),
}).$mount('#app');
