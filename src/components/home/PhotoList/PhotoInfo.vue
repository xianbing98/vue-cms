<template>
	<div class="photoinfo_container">
		<div class="title">
			<h3>{{photoinfo.title}}</h3>
			<p>
				<span>发表时间：{{photoinfo.add_tiem | timefilter}}</span>
				<span>点击：{{photoinfo.click}} 次</span>
			</p>
		</div>
		<hr>
		<div class="imgs">
			<vue-preview :slides="thumimgs" v-for="item in thumimgs" :key="item.url">
				<img :src="item.src" alt="">
			</vue-preview>
		</div>
		<div class="description" v-html="photoinfo.content"></div>
		<my-comment :id="this.id"></my-comment>
	</div>
</template>
<script>
import comments from '../../comment/comments.vue'
export default {
	data() {
		return {
			id: this.$route.params.id,
			photoinfo: {},
			thumimgs: []
		}
	},
	created() {
		this.getimgsinfo()
		this.getthumimgs()
	},
	methods: {
		getimgsinfo() {
			this.$http.get('api/getimageInfo/' + this.id).then((result) => {
				if(result.body.status == 0) {
					this.photoinfo = result.body.message[0]
				}
			})
		},
		getthumimgs() {
			this.$http.get('api/getthumimages/' + this.id).then((result) => {
				if(result.body.status == 0) {
					let imgs = result.body.message;
					imgs.forEach(function(item, i) {
						item.w = 600;
						item.h = 400;
					})
					this.thumimgs = imgs;
				}
			}) 
		}
	},
	components: {
		'myComment': comments
	}
}
</script>
<style lang="less" scoped>
	.photoinfo_container {

		.title {

			h3 {
				color: #29a0ff;
				font-size: 16px;
				text-align: center;
				margin: 15px 0px;
			}
			p {
				display: flex;
				justify-content: space-between;
				padding: 0 5px;
			}
		}
		.description {
			font-size: 14px;
			line-height: 30px;
		}

		.imgs {

			a {
				display: inline-block;
				width: 100%;
			}
		}
	}
</style>