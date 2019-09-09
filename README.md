## vue-cms 项目学习

### timefilter使用全局过滤器，方便复用
```js
Vue.filter('timefilter', function() {
	return moment(value).format('YYYY-MM-DD HH:mm:ss');
})
```

### 父组件向子组件传值，用props接收
```html
<div id="app">
	<son :sendmsg="msg"></son>
</div>
```
```js
const vm = new Vue({
	el: "#app",
	data: {
		msg: "这是父组件数据"
	},
	components: {
		'son': {
			template: "<div>这是子组件--这是父组件数据{{sendmsg}}</div>"，
			props: ['sendmsg']
		}
	}
})
```
____

### Vue项目中使用 vux UI组件，的几个问题
1.vux2必须配合vux-loader使用, 请在build/webpack.base.conf.js里参照如下代码进行配置：
```js
const vuxLoader = require('vux-loader')
const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig
module.exports = vuxLoader.merge(webpackConfig, {
	plugins: ['vux-ui']
})
```

2.这时，又报下面的错：
```js
./node_modules/vux/src/plugins/alert/util.js
Module not found: Error: Can't resolve '../../components/alert' in
'c:\phpStudy\PHPTutorial\WWW\my\VueStudy\vue-cms\node_modules\vux\src\plugins\alert'
./node_modules/vux/src/plugins/confirm/index.js
Module not found: Error: Can't resolve '../../components/confirm' in
'c:\phpStudy\PHPTutorial\WWW\my\VueStudy\vue-cms\node_modules\vux\src\plugins\confirm'
./node_modules/vux/src/plugins/loading/index.js
Module not found: Error: Can't resolve '../../components/loading' in
'c:\phpStudy\PHPTutorial\WWW\my\VueStudy\vue-cms\node_modules\vux\src\plugins\loading'
./node_modules/vux/src/plugins/loading/util.js
Module not found: Error: Can't resolve '../../components/loading' in
'c:\phpStudy\PHPTutorial\WWW\my\VueStudy\vue-cms\node_modules\vux\src\plugins\loading'
./node_modules/vux/src/plugins/toast/index.js
Module not found: Error: Can't resolve '../../components/toast' in
'c:\phpStudy\PHPTutorial\WWW\my\VueStudy\vue-cms\node_modules\vux\src\plugins\toast'
```
这时因为webpack.config.js配置里缺少 .vue extension 配置：

```
resolve: {
	extensions: ['.js', '.vue', '.json']
}
```