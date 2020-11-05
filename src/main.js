import { createApp } from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router/router'

const app = createApp(App)

app.use(router)
app.use(Vant)
app.use(VueAxios, axios)

app.mount('#app')
