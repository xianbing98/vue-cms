<template>
	<div class="photoinfo_container">
		<div class="title">
			<h3>{{photoinfo.title}}</h3>
			<p>
				<span>发表时间：{{photoinfo.add_time | timefilter}}</span>
				<span>点击：{{photoinfo.click}} 次</span>
			</p>
		</div>
		<hr>
		<div class="imgs">
			<vue-preview :slides="thumimgs" ></vue-preview>
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
						item.h = 600;
						item.msrc = item.src;
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
<style lang="less">
	.photoinfo_container {
		padding: 0 5px;

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
			display: flex;
			flex-wrap: wrap;

			figure {
				width: 30%;
				float: left;
				margin: 5px;
				border-radius: 5px;
				overflow: hidden;
				box-shadow: 0 0 5px #555;

				a {
					display: block;
					width: 100%;

					img {
						width: 100%;
					}
				}
			}



		}
	}
</style>