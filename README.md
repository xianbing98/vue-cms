## vue-cms 项目学习
### timefilter使用全局过滤器，方便复用

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
		msg: "这是父组件数据“
	},
	components: {
		'son': {
			template: "<div>这是子组件--这是父组件数据{{sendmsg}}</div>"，
			props: ['sendmsg']
		}
	}
})
```