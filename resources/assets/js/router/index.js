import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from 'src/components/ExampleComponent'

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
			component: ExampleComponent
		}
	]
})