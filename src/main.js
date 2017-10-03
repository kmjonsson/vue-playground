import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Test from './Test.vue'
import store from './store'

Vue.component('test',Test);

Vue.use(VueRouter);

const routes = [
  { path: '', component: Test },
	{ path: '/foo', component: Test },
	{ path: '/bar', component: App },
];

const router = new VueRouter({
	routes
});

var app = new Vue({
  store,
  el: '#app',
  router,
  //render: h => h(App)
})

//router.push("/foo");
