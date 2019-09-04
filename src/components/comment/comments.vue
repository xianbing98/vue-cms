<template>
	<div class="comments_container">
		<h3 class="title">发表评论</h3>
		<hr>
		<textarea placeholder="最多哔哔120字" maxlength="120"></textarea>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<div class="cmts">
			<div class="cmts-item" v-for="(item, index) in commentlist" :key="index">
				<div class="tit">
					<span>{{item.user_name}}</span>
					<span>{{item.add_time | timefilter}}</span>
				</div>
				<div class="content">{{item.content}}</div>
			</div>
		</div>
		<mt-button type="primary" size="large" plain @click="loadmore">加载更多</mt-button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			pageindex: 1,
			commentlist: []
		}
	},
	props:['id'],
	created() {
		this.getcomments();
	},
	methods: {
		getcomments() {
			this.$http.get('http://www.liulongbin.top:3005/api/getcomments/' + this.id +'?pageindex=' + this.pageindex).then(function(data) {
				this.commentlist = this.commentlist.concat(data.body.message);
			})
		},
		loadmore() {
			this.pageindex++;
			this.getcomments();
		}
	}

}
</script>\
<style lang="less" scoped>
	.comments_container {
		.title {
			font-size: 16px;
		}
		textarea {
			height: 84px;
		}
		
		.cmts {
			margin-top: 10px;
			margin-bottom: 10px;

			.cmts-item {
				border-bottom: 1px solid #ccc;
				padding: 10px;

				.tit {
					// background: #ccc;
					height: 25px;
					line-height: 25px;
					font-size: 14px;
					display: flex;
					justify-content: space-between;

				}
				.content {
					text-indent: 2em;
					padding: 5px 0;
					font-size: 13px;
				}
			}
		}
	}
</style>