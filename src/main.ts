import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './registerServiceWorker';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';
// import 'vue-material/dist/theme/default-dark.css';


Vue.config.productionTip = false;
// Vue.use(Vuetify, {
//   iconfont: 'md'
// });
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
