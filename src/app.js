import Vue from 'vue'
import Button from './button'

Vue.component('l-button',Button);

Vue.config.productionTip = false;
new Vue({
    el:'#app'
})