import Vue from 'vue'
import VueRouter from 'vue-router'
// import ExampleComponent from 'src/components/ExampleComponent'
const ExampleComponent = () => import(/* webpackChunkName: "home" */ 'src/components/ExampleComponent.vue')
const AdminIndex = () => import(/* webpackChunkName: "admin" */ 'src/views/admin/index/Index.vue')

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: ExampleComponent
		},
		{
			path: '/admin',
			component: AdminIndex
		}
	]
})