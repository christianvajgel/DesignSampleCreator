import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import { ImagePlugin } from 'bootstrap-vue'

import Verte from 'verte';
import 'verte/dist/verte.css';
Vue.component(Verte.name, Verte);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(ImagePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
