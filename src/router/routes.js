import HomeContainer from '../components/home/HomeContainer.vue'
import MemberContainer from '../components/member/MemberContainer.vue'
import ShopCarContainer from '../components/search/SearchContainer.vue'
import SearchContainer from '../components/shopcar/ShopCarContainer.vue'
import newlist from '../components/home/newlist.vue'
const routes =  [
	{
		path: "/",
		redirect: "/home"
	},
	{
		path: "/home", 
		component: HomeContainer,
		children: [
			{
				path: "newlist", 
				component: newlist
			}
		]
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
	},
]
export default routes