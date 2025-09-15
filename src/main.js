import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(BootstrapVueNext)
app.use(store)
app.use(router)
app.mount('#app')