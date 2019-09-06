<template>
	<div class="container">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h3 class='mui-ellipsis'>{{item.title}}</h3>
						<p><span>发表时间：{{item.add_time | timefilter}}</span><span>点击：{{item.click}} 次</span></p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
// import moment from 'moment'
export default {
	data() {
		return {
			newslist: []
		}
	},
	created() {
		this.getnewslist();
	},
	methods: {
		getnewslist() {
			this.$http.get('api/getnewslist').then(data => {
				if(data.body.status == 0) {
					this.newslist = data.body.message
				}
			})
		}
	},
}
</script>
<style lang="less" scoped>
	.mui-table-view {

		h3 {
			font-size: 15px;
			font-weight: 300;
		}
		p {
			color: #2971D6;
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
		}
	}
</style>