'use strict';



const router = new VueRouter({
  routes: [
    // динамические сегменты начинаются с двоеточия
    { path: '/', component: Vue.component('home') },
    { path: '/flow/:id', component: Vue.component('flow-constructor') }
  ]
});
var app = new Vue({ el: '#app', router: router });
