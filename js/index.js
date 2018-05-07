'use strict';



const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/admin'},
    { path: '/admin',
      component: Vue.component('admin'),
      children: [
        {
          path: 'flows',
          name: 'flows',
          component: Vue.component('flows'),
        },
        {
          path: 'processes',
          name: 'processes',
          component: Vue.component('processes'),
        }
      ]
    },
    { path: '/flow/:id', component: Vue.component('flow-constructor') },
    { path: '/process/:id', component: Vue.component('flow-constructor') }
  ]
});
var app = new Vue({ el: '#app', router: router });
