import Vue from 'vue';
import app from './App.vue'

// router
import VueRouter from 'vue-router'
import routes from './router/routes.js'
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'mui-active'
})

// vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


// mint-ui 
import { Header, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// mui
import '../plugin/mui/css/mui.min.css'
import '../plugin/mui/fonts/icons-extra.css'


const vm = new Vue({
    el: "#app",
    data: {},
    created() {
    },
    render: function(c) {
        return c(app)
    },
    router
})