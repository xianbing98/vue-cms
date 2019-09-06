<template>
	<div class="container">
		<div class="lunbo">
			<mt-swipe :auto="4000">
				<!-- <mt-swipe-item v-for="item in lunboList" :key="item.id">
					<a :href="item.url">
						<img :src="item.img" alt="">
					</a>
				</mt-swipe-item> -->
				<mt-swipe-item>
					<a href="javascript:;">
						<img src="https://tse1-mm.cn.bing.net/th?id=OET.909ecef721df4faabcd06f6a41333573&w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt="">
					</a>
				</mt-swipe-item>
				<mt-swipe-item >
					<a href="javascript:;">
						<img src="https://tse1-mm.cn.bing.net/th?id=OET.2c4615f7694e4217add6483c3b3876f4&w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt="">
					</a>
				</mt-swipe-item>
				<mt-swipe-item >
					<a href="javascript:;">
						<img src="https://tse1-mm.cn.bing.net/th?id=OET.03c2e3ba05664098b2b45b0f688eabad&w=272&h=135&c=7&rs=1&o=5&pid=1.9" alt="">
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<img src="../../images/homelist01.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<img src="../../images/homelist02.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
					<img src="../../images/homelist03.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/feedbacklist">
					<img src="../../images/homelist04.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/videolist">
					<img src="../../images/homelist05.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/contactus">
					<img src="../../images/homelist06.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</router-link>
			</li>
		</ul>
	</div>
	
</template>
<script>
// import VueResource from 'vue-resource'
export default {
	data() {
		return {
			lunboList: []	
		}
	},
	created() {
		this.getlunbo();

	},
	methods: {
		getlunbo() {
			this.$http.get('api/getlunbo').then((data) => {
				if(data.body.status == 0) {
					this.lunboList = data.body.message;
				}
			})
		}
	}
}
</script>
<style lang="less" scoped>
	.container {
		background: #fff;

		.lunbo {
			height: 180px;

			a {
				display: block;
				width: 100%;
				height: 100%;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.mui-grid-view.mui-grid-9 {
			background: #fff;

			img {
				width: 50%;
			}
		}
	}
</style>