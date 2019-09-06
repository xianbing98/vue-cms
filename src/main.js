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
import 'mint-ui/lib/style.css'
// import { Header, Swipe, SwipeItem, Button, Lazyload  } from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import MintUI from 'mint-ui'
Vue.use(MintUI);

// mui
import '../plugin/mui/css/mui.min.css'
import '../plugin/mui/fonts/icons-extra.css'

// moment 日期格式化插件
import moment from 'moment'

// VuePreview 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

Vue.http.options.root = 'http://www.liulongbin.top:3005/';

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