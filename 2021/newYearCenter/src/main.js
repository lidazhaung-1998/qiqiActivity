import Vue from 'vue'
import App from './App.vue'
import common from "./assets/javascript/common"
import api from "./request/api";

Vue.prototype.common = common;
Vue.prototype.$api = api;
// Vue.prototype.isAnchor = Vue.prototype.common.anchorId == Vue.prototype.common.userId;
new Vue({
    render: h => h(App)
}).$mount('#app')
