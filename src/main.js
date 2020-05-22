import Vue from 'vue';
import Buefy from 'buefy';
import api from './services/api';
import App from './App.vue';
import 'buefy/dist/buefy.css';
import './styles/global.scss';

Vue.use(Buefy);

Vue.config.productionTip = false;

Vue.prototype.$http = api;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
