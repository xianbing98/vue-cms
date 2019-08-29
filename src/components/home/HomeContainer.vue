<template>
	<div class="container">
		<div class="lunbo">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="item in lunboList" :key="item.id">
					<a :href="item.url">
						<img :src="item.img" alt="">
					</a>
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newlist">
					<img src="../../images/homelist01.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/homelist02.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/homelist03.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/homelist04.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/homelist05.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<img src="../../images/homelist06.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</a>
			</li>
		</ul>
		<router-view></router-view>
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
			this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then((data) => {
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