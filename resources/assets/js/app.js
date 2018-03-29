
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './bootstrap'
import Vue from 'vue'

import 'src/vendor/iview'
import 'src/vendor/element-ui'

import 'bootstrap/dist/css/bootstrap.css'

import App from 'src/layouts/App'
import router from 'src/router'
import store from 'src/store'


// import ExampleComponent from 'src/components/ExampleComponent.vue'


// Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
