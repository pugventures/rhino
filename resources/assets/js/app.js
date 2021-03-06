
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
/*import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.interceptors.push(function(request, next) {
  request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
  next();
});*/

const user = null;

const authentication = require('./components/AuthenticationComponent.vue');
const dashboard = require('./components/DashboardComponent.vue');

const app = new Vue({
    el: '#RhinoIO',
    data: {
        user: user
    },
    components: {
        'authentication': authentication,
        'dashboard': dashboard
    },
    created: function(){
        console.log('RhinoIO has started.');
    },
    mounted: function(){
        console.log('RhinoIO is ready. Have a great day!');
    }
});
