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
import { Header, Swipe, SwipeItem, Button  } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// mui
import '../plugin/mui/css/mui.min.css'
import '../plugin/mui/fonts/icons-extra.css'

// moment 日期格式化插件
import moment from 'moment'

Vue.filter('timefilter', function(value) {
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
})

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