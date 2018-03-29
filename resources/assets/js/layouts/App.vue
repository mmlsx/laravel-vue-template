<template>
	<div id="app">
		<keep-alive>
			<component :is="currentView"></component>
		</keep-alive>
	</div>
</template>

<script>
	import Home from 'src/layouts/Home'
	import Admin from 'src/layouts/Admin'
	import Config from 'src/config'
	import { currentRouter } from 'src/utils/index'
	export default {
		components: {
			[Config.HOME_MODULE]: Home,
			[Config.ADMIN_MODULE]: Admin
		},
		computed: {
			currentView () {
				// 动态绑定当前视图
				return currentRouter(this.$route.path, Config)
			}
		}
	}
</script>

<style>
	
</style>
