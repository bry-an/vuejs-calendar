import Vue from 'vue'
import './style.scss'

import store from './store';


import moment from 'moment-timezone';
moment.tz.setDefault('UTC'); //this is important to have time consistency across the world
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment }})
//above will add moment as an instance method -- defining property on Vue prototype; all components can access moment lib -- see data object below

import App from './components/App.vue'
new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
});
