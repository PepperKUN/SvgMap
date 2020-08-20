import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import map from "svg-map-sh";

Vue.config.productionTip = false;

// Vue.use(map)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
