import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Example from './example_worker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

const worker = new Example();
worker.onmessage = msg => console.log(msg.data);
worker.postMessage('ping');
