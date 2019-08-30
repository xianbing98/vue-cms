import Vue from 'vue';
import app from './App.vue'

// router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/routes.js'


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

// moment 日期格式化插件
import moment from 'moment'


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