<template>
	<div class="photolist_container">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id==0? 'mui-active': '']" v-for="item in imgcategory" :key="item.id" @click="getimgs(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>

		</div>
		<ul class="images">
			<router-link :to="'/home/photoinfo/'+item.id" v-for="item in images" :key="item.img_url" tag="li">
				<img v-lazy="item.img_url">
				<p>{{item.zhaiyao}}</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
import mui from '../../../../plugin/mui/js/mui.js'

export default {
	data() {
		return {
			imgcategory: [],
			images: []
		}
	},
	created() {
		this.getimgcategory();
		this.getimgs(0)
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods: {
		getimgcategory() {
			this.$http.get('api/getimgcategory').then((result) => {
				if(result.body.status == 0) {
					result.body.message.unshift({id: 0, title: "全部"})
					this.imgcategory = result.body.message
				}
			})
		},
		getimgs(id) {
			this.$http.get('api/getimages/' + id).then((result) => {
				if(result.body.status == 0) {
					this.images = result.body.message
				}
			})
		}
	}
}
</script>
<style lang="less" scoped>
	.photolist_container {

		.images {
			padding: 0px;
			margin: 0 10px;

			li {
				list-style: none;
				position: relative;
				margin: 10px 0px;
				border-radius: 5px;
				overflow: hidden;
				box-shadow: 0 0 8px #555;

				img {
					width: 100%;
					vertical-align: bottom;
				}

				img[lazy=loading] {
					width: 40px;
					height: 300px;
					margin: auto;
				}

				p {
					position: absolute;
					bottom: 0px;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.4);
					margin-bottom: 0px;
					max-height: 85px;
				}
			}
			
		}
	}
</style>