/**
 * 用来判断当前路由导航的函数
 * @param  {object} obj    当前对象
 * @param  {string} path   路由路径
 * @param  {string} config 配置
 * @return {string}        [description]
 */
export function currentRouter(path, config) {
	console.log(path)
	console.log(config)
	// 获取路由后缀，用户自己配置的
	let routerSuffix = config.ROUTER_SUFFIX.admin
	let reg = new RegExp(routerSuffix)
	if (path.search(reg) !== -1) {
		// 后台模板,这里的返回值和components中的键相对应
		return config.ADMIN_MODULE
	}
	// 前台模板,这里的返回值和components中的键相对应
	return config.HOME_MODULE
}