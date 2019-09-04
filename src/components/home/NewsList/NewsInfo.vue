<template>
	<div class="newsinfo_container">
		<h3 class="title">{{newinfo.title}}</h3>
		<p class="subtitle"><span>发表时间：{{newinfo.add_time | timefilter}}</span> <span>点击：{{newinfo.click}} 次</span></p>
		<hr>
		<div class="content" v-html="newinfo.content"></div>
		<my-comments :id="id"></my-comments>
	</div>
</template>
<script>
import comments from '../../comment/comments.vue';
export default {
	data() {
		return {
			id: this.$route.params.id,
			newinfo: {}
		}
	},
	created() {
		this.getnewsinfo();
	},
	methods: {
		getnewsinfo() {
			this.$http.get('http://www.liulongbin.top:3005/api/getnew/' + this.id).then(function(data) {
				this.newinfo = data.body.message[0];
			})
		}
	},
	components: {
		'myComments': comments
	}
}
</script>
<style lang="less" scoped>
	.newsinfo_container {
		padding: 0 5px;

		.title {
			color: red;
			text-align: center;
			font-size: 16px;
			height: 30px;
			line-height: 30px;
		}
		.subtitle {
			display: flex;
			justify-content: space-between;
			color: #0e94ff;
		}
	}
</style>