import Vue from 'vue'
import App from './App.vue'
import {Progress, Slider} from 'element-ui'

Vue.use(Progress);
Vue.use(Slider);

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
