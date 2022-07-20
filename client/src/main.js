import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';


// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')

