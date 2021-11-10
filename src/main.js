import Vue from "vue";
import App from "./App.vue";
import Notification from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Notification);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
