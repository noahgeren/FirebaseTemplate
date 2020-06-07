import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
