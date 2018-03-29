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
	export default {
		components: {
			home: Home,
			admin: Admin
		},
		computed: {
			currentView () {
				// 获取路由后缀，用户自己配置的
				let routerSuffix = Config.ROUTER_SUFFIX.admin
				let reg = new RegExp(routerSuffix)
				if (this.$route.path.search(reg) !== -1) {
					// 后台模板,这里的返回值和components中的键相对应
					return 'admin'
				}
				// 前台模板,这里的返回值和components中的键相对应
				return 'home'
			}
		}
	}
</script>

<style>
	
</style>
