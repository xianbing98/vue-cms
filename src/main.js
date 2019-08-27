import Vue from 'vue';
import app from './App.vue'

// mint-ui 
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);

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
    } 
})