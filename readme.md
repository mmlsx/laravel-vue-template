# Laravel + Vue 2 + Element-ui + iView 打造开发模板

模板所需:

| 软件包 | 版本 |
| --- | --- |
| PHP | > 7.0 |
| Server | nginx |
| MySQL | > 5.5 |
| Laravel | 5.5 |
| Vue | > 2.0 |
| lodash | > 4.17 |
| axios | > 0.17.0 |
| vue-router | > 3.0 |
| vuex | > 3.0 |
| bootstrap | 4.0.0 |
| iview | > 2.0 |
| element-ui | > 2.0 |

## 项目目录
```
后期补充...
```

## 安装
首先从 `github` 克隆项目到本地
```
git clone xxx
```

安装 Laravel 开发依赖
```
composer install
composer dump-autoload  // 生成自动加载文件
```

安装前端依赖
```
npm install
```

## 运行 
```
npm run dev  // 打包前端资源
或 npm run watch // 实时监测前端资源更新，并编译
```

## 配置服务器

### 使用内置服务器
```
php artisan serve // 开启 web 服务

```
打开浏览器访问 http://localhost:8000 查看效果
