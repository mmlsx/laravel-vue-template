const _ = require('lodash')
const path = require('path')
// 引入项目配置文件
const webpackConfig = require('./node_modules/laravel-mix/setup/webpack.config.js')

// 合并项目配置文件与自定义配置文件
module.exports = _.merge(webpackConfig, {
	resolve: {
		// 给路径起别名
		alias: {
			// 'components': path.resolve('resources/assets/js/components')
			'src': path.resolve('resources/assets/js')
		}
	}
})