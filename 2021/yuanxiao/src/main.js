import Vue from 'vue'
import App from './App.vue'
import common from "./assets/javascript/common"
import Tween from "./assets/javascript/tween"
import api from "./request/api";
import "./assets/css/_reset.scss";
Vue.prototype.common = common;
Vue.prototype.$Tween = Tween;
Vue.prototype.$api = api;
new Vue({
    render: h => h(App)
}).$mount('#app')
