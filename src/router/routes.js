import VueRouter from 'vue-router'
import HomeContainer from '../components/home/HomeContainer.vue'
import MemberContainer from '../components/member/MemberContainer.vue'
import ShopCarContainer from '../components/search/SearchContainer.vue'
import SearchContainer from '../components/shopcar/ShopCarContainer.vue'
import NewsList from '../components/home/NewsList/NewsList.vue'
import PhotoList from '../components/home/PhotoList/PhotoList.vue'
import GoodsList from '../components/home/GoodsList/GoodsList.vue'
import FeedbackList from '../components/home/FeedbackList/FeedbackList.vue'
import VideoList from '../components/home/VideoList/VideoList.vue'
import ContactUs from '../components/home/ContactUs/ContactUs.vue'
import NewsInfo from '../components/home/NewsList/NewsInfo.vue'

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
			path: '/home/newsinfo/:id',
			component: NewsInfo
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
			path: '/home/videolist',
			component: VideoList
		},
		{
			path: '/home/contactus',
			component: ContactUs
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