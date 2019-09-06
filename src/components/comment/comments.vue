<template>
	<div class="comments_container">
		<h3 class="title">发表评论</h3>
		<hr>
		<textarea placeholder="最多哔哔120字" maxlength="120" v-model="cmtinfo"></textarea>
		<mt-button type="primary" size="large" @click="postcomments">发表评论</mt-button>
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
import { Toast } from 'mint-ui';
export default {
	data() {
		return {
			pageindex: 1,
			commentlist: [],
			cmtinfo: ""
		}
	},
	props:['id'],
	created() {
		this.getcomments();
	},
	methods: {
		getcomments() {
			let instance = Toast({
				message: '正在加载...',
				iconClass: 'mui-icon mui-icon-spinner-cycle mui-spin',
				duration: -1
			});
			this.$http
			.get('api/getcomments/' + this.id +'?pageindex=' + this.pageindex)
			.then((result) => {
				if(result.body.status == 0) {
					this.commentlist = this.commentlist.concat(result.body.message);
					instance.close();
				}
			})
		},
		loadmore() {
			this.pageindex++;
			this.getcomments();
		},
		postcomments() {
			if(this.cmtinfo.trim().length == 0) {
				return Toast({
					message: "评论内容不能为空",
					duration: 1000
				});
			}
			let posting = Toast({
				message: '正在发送...',
				iconClass: 'mui-icon mui-icon-spinner-cycle mui-spin',
				duration: -1
			});
			this.$http
			.post('api/postcomment/'+ this.id, {
				content: this.cmtinfo
			}, {
				emulateJSON: true
			})
			.then((result) => {
				if(result.body.status == 0) {
					posting.close();
					this.pageindex = 1;
					this.commentlist = [];
					this.getcomments();
					this.cmtinfo = "";
				}
			})
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
			font-size: 14px;
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