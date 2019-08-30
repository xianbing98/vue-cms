import VueRouter from 'vue-router'
import HomeContainer from '../components/home/HomeContainer.vue'
import MemberContainer from '../components/member/MemberContainer.vue'
import ShopCarContainer from '../components/search/SearchContainer.vue'
import SearchContainer from '../components/shopcar/ShopCarContainer.vue'
import NewsList from '../components/home/NewsList.vue'
import PhotoList from '../components/home/PhotoList.vue'
import GoodsList from '../components/home/GoodsList.vue'
import FeedbackList from '../components/home/FeedbackList.vue'

const router = new VueRouter({
    routes: [
		{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home", 
			component: HomeContainer
		},
		{
			path: '/home/newslist',
			component: NewsList
		},
		{
			path: '/home/photolist',
			component: PhotoList
		},
		{
			path: '/home/goodslist',
			component: GoodsList
		},
		{
			path: '/home/feedbacklist',
			component: FeedbackList
		},
		{
			path: "/member",
			component: MemberContainer
		},
		{
			path: "/shopcar",
			component: ShopCarContainer
		},
		{
			path: "/search",
			component: SearchContainer
		}
	],
    linkActiveClass: 'mui-active'
})
export default router